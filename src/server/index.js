import { DBName, mongoURL, yearsCollection } from "./helpers";
import url from "url";
import express from "express";
import os from "os";
import cors from "cors";
import { MongoClient } from "mongodb";

const whitelist = ["http://localhost:3000", "http://name-trends.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

MongoClient.connect(mongoURL, function (err, client) {
  const app = express();
  app.use(cors());
  app.use(express.static("dist"));
  const db = client.db(DBName);

  app.get("/list/", cors(corsOptions), async (req, res) => {
    const { query } = url.parse(req.url, true);
    const { year, gender } = query;
    db.collection(yearsCollection).findOne(
      {
        gender,
        year: parseInt(year, 10),
      },
      (err, result) => {
        return res.send(result);
      }
    );
  });

  app.listen(process.env.PORT || 8080, () =>
    console.log(`Listening on port ${process.env.PORT || 8080}!`)
  );
});
