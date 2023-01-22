import express from 'express';
import mongoUtil from '../db/mongoutil.js';

const milestoneRouter = express.Router();

milestoneRouter.get('/get-all', async (req, res) => {
    const db = mongoUtil.getDb();
    const user = req.query.user;
    const response = await db.collection(user).find({}).toArray();
    res.send(response);
});

milestoneRouter.post('/add-milestone', async (req, res) => {
    const db = mongoUtil.getDb();
    const user = req.query.user;
    const milestone = req.body;
    const response = await db.collection(user).insertOne(milestone);
    res.send(response);
});

export default milestoneRouter;