import express from "express";
const router = express.Router();

import {
	getCategory,
	postCategory,
	putCategory,
	deleteCategory,
} from "../controllers/categoryController";

router.get("/category", getCategory);
router.post("/category", postCategory);
router.put("/category/:id", putCategory);
router.delete("/category/:id", deleteCategory);
router.delete("/category:id", deleteCategory);

export default router;