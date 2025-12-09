import express from "express";
import { searchNumber ,addToDnd,getDndList} from "../controllers/dndController.js";

const router = express.Router();

router.get("/lead/search", searchNumber);


router.post("/add-dnd", addToDnd);


router.get("/get-dnd-list", getDndList);

export default router;
