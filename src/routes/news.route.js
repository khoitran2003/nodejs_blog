import express from "express";
const router = express.Router();

import newsController from "../app/controllers/news.controller.js";

router.get("/:slug", newsController.show);
router.get("/", newsController.index);

export default router;
