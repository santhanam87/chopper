import express from 'express';
import reactPageController from '../controller/reactPageController';

const router = express.Router();

router.get('/react', reactPageController);
router.get('/', (req, res) => {
    res.send('Hello from express');
});

export default router;
