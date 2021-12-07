import express from "express";
import UserController from "../controllers/user-controller";
import authentication from "../middlewares/authentication";
import ROUTES from "./apis";

const router = express.Router()

router.get(ROUTES.ROOT, [authentication] ,(req,res) => res.send('ROOT'))
router.get(ROUTES.ALL_USER,UserController.getAllUser);
router.post(ROUTES.REGISTER,UserController.register);
router.post(ROUTES.LOG_IN,UserController.login);

export default router;
