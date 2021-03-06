import TaskService from "../services/task-service";
import BaseController from "./base-constroller";
import 'regenerator-runtime/runtime';


class TaskController extends BaseController {
    static getTaskbyId = async ( req, res ) => {
        try {
            const {id_user} = req.user
            const taskByid = await TaskService.getTaskbyId(id_user)
            return res.status(200).json(taskByid)
        } catch (err) {
            console.log(err);
            const error = this.getError(err);
            return res.status(error.code).json(error.message)
        }
    }

    static addTask = async ( req, res ) => {
        try {
            const {id_user} = req.user
            const { todo } = req.body
            const createTask = await TaskService.addTask({id_user, todo})
            return res.status(200).json({
                message: 'Created!',
                todo: createTask.todo
            })
            
        } catch (err) {
            console.log(err);
            const error = this.getError(err);
            return res.status(error.code).json(error.message)
        }
    }

    static deleteTask = async ( req, res ) => {
        try {
            const { id_task } = req.params
            await TaskService.deleteTask({id_task});
            return res.status(200).json({
               message:"Task Deleted!" 
            })
            
        } catch (err) {
            console.log(err)
            const error = this.getError(err);
            return res.status(error.code).json(error.message)
            
        }
    }

    static updateTask = async ( req, res ) => {
        try {
            const { id_task } = req.params
            const { todo, complete } = req.body
            const updatedTask = await TaskService.updateTask(todo, complete, id_task);
            return res.status(200).json({
                message: "Task Updated!",
                todo: updatedTask[1].map(({ todo })=> todo),
                complete: updatedTask[1].map(({ complete })=> complete),
            })
            
        } catch (err) {
            console.log(err);
            const error = this.getError(err);
            return res.status(error.code).json(error.message)
            
        }
    }
}

export default TaskController;
