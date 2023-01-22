import express from 'express';
import manager from '../train.js';

const chatBotRouter = express.Router();

chatBotRouter.get('/talk-to-bot', async (req, res) => {
    // Loading our saved model
    manager.load();
    const response = await manager.process("en", req.query.input);
    res.status(200).send(response.answer);
});

export default chatBotRouter;