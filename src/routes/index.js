import express from "express";
import UserController from "../controllers/user-controller";
import ROUTES from "./apis";

const router = express.Router()

router.get(ROUTES.ROOT, (req,res) => res.send('hello world'))
router.get(ROUTES.ALL_USER,UserController.getAllUser)

export default router;
