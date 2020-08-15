import fs from 'fs';
import { MongoClient } from 'mongodb';
import { range } from 'lodash';
import { yearRange, genders } from '../helpers';
import { mongoURL, DBName, yearsCollection } from './helpers';

const lineDelimiter = '\r\n';
const valueDelimiter = ',';
const valueIndex = {
  firstName: 0,
  gender: 1,
  count: 2,
};

const handleError = (err) => {
  if (err) throw err;
};

const lineToArray = (lineString) => lineString.toLowerCase().split(valueDelimiter);

const fileToArray = (filePath) =>
  fs.readFileSync(filePath, 'utf8').toString().split(lineDelimiter).map(lineToArray);

const doesFileExist = (filePath) => fs.existsSync(filePath);

const createDocument = ({ year, genderKey }) => {
  const filePath = `data/yob${year}.txt`;
  if (!doesFileExist(filePath)) {
    handleError(`Error: no file exists at ${filePath}`);
  }
  const allNames = fileToArray(filePath);
  const filteredNames = allNames.filter((name) => name[valueIndex.gender] === genderKey);
  const parsedNames = filteredNames.map((name) => {
    const firstName = name[valueIndex.firstName];
    const gender = name[valueIndex.gender];
    const count = name[valueIndex.count];
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
  MongoClient.connect(mongoURL, (err, client) => {
    handleError(err);
    const db = client.db(DBName);
    clearDB(db);

    db.createCollection(yearsCollection, async (collectionErr) => {
      handleError(collectionErr);
      insertYearDocuments(db);
      client.close();
    });
  });
};

createDB();
