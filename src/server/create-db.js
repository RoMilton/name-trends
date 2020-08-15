import fs from "fs";
import { MongoClient } from "mongodb";
import readline from "readline";
import { range } from "lodash";
import { yearRange, genders } from "../helpers.js";
import { mongoURL, DBName, yearsCollection } from "./helpers";

const FILE_LINE_DELIMITER = "\r\n";
const FILE_VALUE_DELIMITER = ",";
const FILE_VALUE_INDEX = {
  firstName: 0,
  gender: 1,
  count: 2,
};

const handleError = (err) => {
  if (err) throw err;
};

const lineToArray = (lineString) =>
  lineString.toLowerCase().split(FILE_VALUE_DELIMITER);

const fileToArray = (filePath) => {
  return fs
    .readFileSync(filePath, "utf8")
    .toString()
    .split(FILE_LINE_DELIMITER)
    .map(lineToArray);
};

const doesFileExist = (filePath) => fs.existsSync(filePath);

const createDocument = ({ year, genderKey }) => {
  const filePath = `data/yob${year}.txt`;
  if (!doesFileExist(filePath)) {
    handleError(`Error: no file exists at ${filePath}`);
  }
  const allNames = fileToArray(filePath);
  const filteredNames = allNames.filter(
    (name) => name[FILE_VALUE_INDEX.gender] === genderKey
  );
  const parsedNames = filteredNames.map((name) => {
    const firstName = name[FILE_VALUE_INDEX.firstName];
    const gender = name[FILE_VALUE_INDEX.gender];
    const count = name[FILE_VALUE_INDEX.count];
    return [`${firstName}-${gender}`, firstName, count];
  });

  return {
    year,
    gender: genderKey,
    names: parsedNames,
  };
};

const insertYearDocuments = (db) => {
  const allYears = range(yearRange[0], yearRange[1] + 1);

  allYears.forEach((year) => {
    genders.forEach((genderDetails) => {
      const newDocument = createDocument({
        year,
        genderKey: genderDetails.key,
      });
      console.log(`inserting document for ${year} | ${genderDetails.key}`);
      db.collection(yearsCollection).insertOne(newDocument);
    });
  });
};

const clearDB = (db) => {
  if (db.collection(yearsCollection)) {
    db.collection(yearsCollection).drop();
  }
};

const createDB = () => {
  MongoClient.connect(mongoURL, function (err, client) {
    handleError(err);
    const db = client.db(DBName);
    clearDB(db);

    db.createCollection(yearsCollection, async function (err, result) {
      handleError(err);
      insertYearDocuments(db);
      client.close();
    });
  });
};

createDB();
