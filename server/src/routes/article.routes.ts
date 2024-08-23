import express from "express";
const router = express.Router();

import {
	getArticle,
	postArticle,
	putArticle,
	deleteArticle,
} from "../controllers/articleController";

router.get("/article", getArticle);
router.post("/article", postArticle);
router.put("/article/:id", putArticle);
router.delete("/article/:id", deleteArticle);
router.delete("/article:id", deleteArticle);

export default router;
