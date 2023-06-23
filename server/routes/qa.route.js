import express from 'express';
import controller from '../controllers/index.js';

const router = express.Router({ mergeParams: true });

router.get('/qa', controller.get);

router.get('/qa/:id', controller.getById);

router.post('/qa', controller.create);

router.put('/qa/:id', controller.update);

export default router;
