import express from 'express';
import * as dotenv from "dotenv";
import cors from 'cors';
import mongoUtil from './db/mongoutil.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoUtil.connectToDatabase( function( err, client ) {
  if (err) console.log(err);
  else console.log("Connected to Database");
});

const port = process.env.PORT || 8080;
app.listen(port, () =>
console.log(`Example app listening on port ${port}!`),
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});