import express from 'express';
import controller from '../controllers/index.js';

const router = express.Router({ mergeParams: true });

router.get('/frontend', controller.get);

router.get('/frontend/:id', controller.getById);

router.post('/frontend', controller.create);

router.put('/frontend/:id', controller.update);

export default router;
