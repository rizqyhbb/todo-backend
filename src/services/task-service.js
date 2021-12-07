import ERRORS from "../config/errors";
import { task } from "../models";

class TaskService {
    static getTaskbyId = async (id) => {
        try {
            const taskbyId = await task.findAll({
                    where: { id_user: id },
                    attributes: ['task']
                })
                return taskbyId
        } catch (err) {
            console.log(err)
            throw new Error(ERRORS.INTERNAL_SERVER_ERROR)
        }    
    }
}

export default TaskService