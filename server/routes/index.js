import express from 'express';
import frontendRoute from './frontend.route.js';
import backendRoute from './backend.route.js';
import qaRoute from './qa.route.js';
import pmRoute from './pm.route.js';

const router = express.Router();

router.use('/', frontendRoute);
router.use('/', backendRoute);
router.use('/', qaRoute);
router.use('/', pmRoute);

export default router;
