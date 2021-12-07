import TaskService from "../services/task-service";
import BaseController from "./base-constroller";


class TaskController extends BaseController {
    static getTaskbyId = async ( req, res ) => {
        try {
            const { id } = req.params
            const taskByid = await TaskService.getTaskbyId(id)
            return res.status(200).json(taskByid)
        } catch (err) {
            console.log(err);
            const error = this.getError(err);
            return res.status(error.code).json(error.message)
        }
    }
}

export default TaskController;
