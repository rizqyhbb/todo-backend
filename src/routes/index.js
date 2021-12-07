import express from "express";
import UserController from "../controllers/user-controller";
import TaskController from "../controllers/task-controller";
import authentication from "../middlewares/authentication";
import ROUTES from "./apis";

const router = express.Router()

router.get(ROUTES.ROOT,(req,res) => res.send('ROOT'))
router.get(ROUTES.ALL_USER,UserController.getAllUser);
router.post(ROUTES.REGISTER,UserController.register);
router.post(ROUTES.LOG_IN,UserController.login);

router.use(authentication)

router.get(ROUTES.TASK_BY_ID,TaskController.getTaskbyId)

export default router;
