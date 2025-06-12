import express from "express";
import { handleQuery } from "../controllers/cardController.js";

const router = express.Router();

// router.get("/", getAllCards);
router.post("/query", handleQuery);

export default router;
