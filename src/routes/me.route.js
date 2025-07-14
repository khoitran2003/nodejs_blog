import express from 'express';
const router = express.Router();

import meController from '../app/controllers/me.controller.js';

router.get('/stored/courses', meController.storedCourses);

export default router;
