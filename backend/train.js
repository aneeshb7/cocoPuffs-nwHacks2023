// Let's start with importing `NlpManager` from `node-nlp`. 
// This will be responsible for training, saving, loading and processing.
import { NlpManager } from "node-nlp";
// Creating new Instance of NlpManager class.
const manager = new NlpManager({ languages: ["en"] });
// Let's import fs module to read our json files.
import fs from "fs";
// Let's read all our intents files in the folder intents
const files = fs.readdirSync("./intents");
// Looping through the files and Parsing the string to object 
// and passing it to manager instance to train and process it.
for (const file of files) {
    let data = fs.readFileSync(`./intents/${file}`);
    data = JSON.parse(data);
    for (const intent of data.intents) {
        for (const pattern of intent.patterns) {
            manager.addDocument("en", pattern, intent.tag);
        }
        for (const response of intent.responses) {
            manager.addAnswer("en", intent.tag, response);
        }
    }
}
// let's create a function that will be responsible for Training and saving the manager instance.
async function train_save(){
    await manager.train();
    manager.save();
}
// Calling the above function
train_save();

export default manager;