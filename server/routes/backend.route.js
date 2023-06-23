import express from 'express';
import controller from '../controllers/index.js';

const router = express.Router({ mergeParams: true });

router.get('/backend', controller.get);

router.get('/backend/:id', controller.getById);

router.post('/backend', controller.create);

router.put('/backend/:id', controller.update);

export default router;
