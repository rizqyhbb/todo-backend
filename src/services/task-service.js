import ERRORS from "../config/errors";
import { task } from "../models";
import 'regenerator-runtime/runtime';

class TaskService {
    static getTaskbyId = async (id) => {
        try {
            const taskbyId = await task.findAll({
                    where: { id_user: id },
                    attributes: ['todo', 'id_task', 'complete']
                })
                return taskbyId
                }
        catch (err) {
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

    static updateTask = async (todo, complete, id_task) => {
        
            const updatedTask = await task.update({todo, complete}, {where: {id_task}, returning: true})
            return updatedTask
        
    }
}

export default TaskService