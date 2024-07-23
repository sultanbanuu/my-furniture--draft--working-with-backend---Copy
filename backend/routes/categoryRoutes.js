import express from "express";
import { createCategory, listCategory } from "../controllers/categoryController.js";

const router = express.Router();
router.route("/").post(createCategory);

router.route("/categories").get(listCategory);

export default router;
