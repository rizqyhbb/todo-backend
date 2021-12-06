import express from "express";
import UserController from "../controllers/user-controller";
import ROUTES from "./apis";

const router = express.Router()

router.get(ROUTES.ROOT, (req,res) => res.send('ROOT'))
router.get(ROUTES.ALL_USER,UserController.getAllUser);
router.post(ROUTES.REGISTER,UserController.register);

export default router;
