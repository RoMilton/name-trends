import fs from 'fs';
import { MongoClient } from 'mongodb';
import { range } from 'lodash';
import { yearRange, genders } from '../helpers';
import { mongoURL, DBName, yearsCollection } from './helpers';

const lineDelimiter = '\r\n';
const valueDelimiter = ',';

const handleError = (Error) => {
  if (Error) throw new Error();
};

const lineToArray = (lineString) =>
  lineString.toLowerCase().split(valueDelimiter);

const fileToArray = (filePath) =>
  fs
    .readFileSync(filePath, 'utf8')
    .toString()
    .split(lineDelimiter)
    .map(lineToArray);

const doesFileExist = (filePath) => fs.existsSync(filePath);

const getNameDetails = (name) => {
  return {
    firstName: name[0],
    gender: name[1],
    count: parseInt(name[2], 10),
    rank: parseInt(name[3], 10),
  };
};

const getRank = (name, previousName) => {
  if (!previousName) return 1;
  const { count: prevCount, rank: prevRank } = getNameDetails(previousName);
  const { count } = getNameDetails(name);
  return count === prevCount ? prevRank : prevRank + 1;
};

const addRanksToNames = (names) =>
  names.reduce((accumNames, name, index) => {
    const previousName = accumNames[index - 1] || null;
    const rank = getRank(name, previousName);
    return [...accumNames, [...name, rank]];
  }, []);

const addKeysToNames = (names) =>
  names.map((name) => {
    const { firstName, gender, count, rank } = getNameDetails(name);
    return [`${firstName}-${gender}`, rank, firstName, count];
  });

const filterByGender = (names, genderKey) =>
  names.filter((name) => {
    const { gender } = getNameDetails(name);
    return gender === genderKey;
  });

const createDocument = ({ year, genderKey }) => {
  const filePath = `data/yob${year}.txt`;
  if (!doesFileExist(filePath)) {
    handleError(`Error: no file exists at ${filePath}`);
  }
  const allNames = fileToArray(filePath);
  const filteredNames = filterByGender(allNames, genderKey);
  const rankedNames = addRanksToNames(filteredNames);
  const namesWithKeys = addKeysToNames(rankedNames);

  return {
    year,
    gender: genderKey,
    names: namesWithKeys,
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
      console.log(`creating rankings for ${year} | ${genderDetails.key}`);
      db.collection(yearsCollection).insertOne(newDocument);
    });
  });
};

const clearDB = async (db) => {
  try {
    await db.collection(yearsCollection).drop();
    console.log('Collection Deleted');
  } catch {
    console.log('No Existing Collection found');
  }
};

const createDB = async () => {
  MongoClient.connect(mongoURL, async (err, client) => {
    handleError(err);
    const db = client.db(DBName);
    await clearDB(db);
    db.createCollection(yearsCollection, async (collectionErr) => {
      handleError(collectionErr);
      insertYearDocuments(db);
      client.close();
    });
  });
};

createDB();
