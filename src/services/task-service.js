import ERRORS from "../config/errors";
import { task } from "../models";

class TaskService {
    static getTaskbyId = async (id) => {
        try {
            const taskbyId = await task.findAll({
                    where: { id_user: id },
                    attributes: ['todo']
                })
                return taskbyId.map((list) => {
                    return list.todo
                })
        } catch (err) {
            console.log(err)
            throw new Error(ERRORS.INTERNAL_SERVER_ERROR)
        }    
    }

    static addTask = async ({id_user, todo}) => {
            if(!todo){
                throw new Error(ERRORS.BAD_REQUEST)
            }
            const createTask = await task.create({
                id_user,
                todo
            });
            console.log("THIS IS CREATE TASK",createTask)
            return createTask;
    }

    static deleteTask = async ({id_task}) => {
        try {
            const destroyTask = await task.destroy({where: {id_task}})
            return destroyTask
            
        } catch (err) {
            console.log(err)
            throw new Error(ERRORS.INTERNAL_SERVER_ERROR)
        }
    }
}

export default TaskService