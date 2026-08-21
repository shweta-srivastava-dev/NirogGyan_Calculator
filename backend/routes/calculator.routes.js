import express from "express";

import { calculateDiabetes } from "../controllers/calculator.controller.js";
import { calculateHypothyroid } from "../controllers/calculator.controller.js";
import { calculateHeart } from "../controllers/calculator.controller.js";

const router = express.Router();

router.post("/diabetes", calculateDiabetes);
router.post("/hypothyroid", calculateHypothyroid);
router.post("/heart", calculateHeart);

export default router;
