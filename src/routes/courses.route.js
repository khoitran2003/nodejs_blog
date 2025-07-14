import express from 'express';
const router = express.Router();

import coursesController from '../app/controllers/courses.controller.js';

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.delete);

export default router;
