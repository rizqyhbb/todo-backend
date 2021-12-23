import express from "express";
import UserController from "../controllers/user-controller";
import TaskController from "../controllers/task-controller";
import authentication from "../middlewares/authentication";
import authorization from "../middlewares/authorization";
import ROUTES from "./apis";

const router = express.Router()

router.get("/",(req,res) => {res.send("WELCOMEE")})
router.post(ROUTES.REGISTER,UserController.register);
router.post(ROUTES.LOG_IN,UserController.login);

router.use(authentication)
router.get(ROUTES.ALL_TASK, TaskController.getTaskbyId)
router.post(ROUTES.ALL_TASK, TaskController.addTask)
router.delete(ROUTES.TASK_BY_ID, [authorization], TaskController.deleteTask)
router.patch(ROUTES.TASK_BY_ID, [authorization], TaskController.updateTask)


export default router;
