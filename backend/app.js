import express from 'express';
import * as dotenv from "dotenv";
import cors from 'cors';
import mongoUtil from './db/mongoutil.js';
import locationRouter from './routes/locations.js';

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

app.use('/locations', locationRouter)
import { NlpManager } from "node-nlp";
console.log("Starting Chatbot ...");
const manager = new NlpManager({ languages: ["en"] });
// Loading our saved model
manager.load();

// Loading a module readline, this will be able to take input from the terminal.
import readline from "readline";
var rl = readline.createInterface(process.stdin, process.stdout);
console.log("Chatbot started!");
rl.setPrompt("> ");
rl.prompt();
rl.on("line", async function (line) {
  // Here Passing our input text to the manager to get response and display response answer.
  const response = await manager.process("en", line);
  console.log(response.answer);
  rl.prompt();
}).on("close", function () {
  process.exit(0);
})