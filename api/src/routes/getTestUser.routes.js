import { Router } from "express";
import { getDataUserForm, showDataUser, searchUser } from "../controllers/saveDataUser.js";

const router = Router()

// save data user
router.post("/submit", getDataUserForm);

// view data user
router.get("/showdata", showDataUser);

// search user by id
router.get("/search:id", searchUser);

export default router;