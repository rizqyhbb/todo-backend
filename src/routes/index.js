import express from "express";
import UserController from "../controllers/user-controller";
import TaskController from "../controllers/task-controller";
import authentication from "../middlewares/authentication";
import authorization from "../middlewares/authorization";
import ROUTES from "./apis";
import cors from 'cors';

const router = express.Router()

const corsOption = {
  origin: 'http://localhost:3000'
}

router.get("/",(req,res) => {
  console.log("eheuhueh")
  res.json({message: "WELCOMEE"})})
router.post(ROUTES.REGISTER, cors(corsOption), UserController.register);
router.post(ROUTES.LOG_IN, cors(corsOption), UserController.login);

router.use(authentication)
router.get(ROUTES.ALL_TASK, TaskController.getTaskbyId)
router.post(ROUTES.ALL_TASK, TaskController.addTask)
router.delete(ROUTES.TASK_BY_ID, [authorization], TaskController.deleteTask)
router.patch(ROUTES.TASK_BY_ID, [authorization], TaskController.updateTask)


export default router;
