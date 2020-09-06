import url from 'url';
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import { DBName, mongoURL, yearsCollection } from './helpers';

const whitelist = ['http://localhost:3000', 'http://name-trends.com'];
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

MongoClient.connect(mongoURL, (err, client) => {
  const app = express();
  app.use(cors());
  app.use(express.static('dist'));
  const db = client.db(DBName);

  app.get('/list/', cors(corsOptions), async (req, res) => {
    const { query } = url.parse(req.url, true);
    const { year, gender } = query;
    db.collection(yearsCollection).findOne(
      {
        gender,
        year: parseInt(year, 10),
      },
      (findErr, result) => {
        return res.send(result);
      }
    );
  });

  app.listen(process.env.PORT || 8080, () =>
    console.log(`Listening on port ${process.env.PORT || 8080}!`)
  );
});
