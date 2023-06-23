import express from 'express';
import controller from '../controllers/index.js';

const router = express.Router({ mergeParams: true });

router.get('/pm', controller.get);

router.get('/pm/:id', controller.getById);

router.post('/pm', controller.create);

router.put('/pm/:id', controller.update);

export default router;
