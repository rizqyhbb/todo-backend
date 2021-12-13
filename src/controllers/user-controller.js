import UserService from "../services/user-service";
import BaseController from "./base-constroller";

class UserController extends BaseController{
    static getAllUser = async (req, res) => {
        try {
            const users = await UserService.getAllUser();
            res.status(200).json(users)

        } catch (err) {
            console.log(err);
            const error = this.getError(err);
            return res.status(error.code).json(error.message)
        }
    }

    static register = async (req, res) => {
        try {
            const {
                email,
                password,
                first_name,
                last_name
            } = req.body
            
            const register = await UserService.register({
                email, 
                password, 
                first_name, 
                last_name});
            return res.status(200).json({
                message: 'Account registered',
                email: register.email
            })
            
        } catch (err) {
            console.log(err);
            const error = this.getError(err);
            return res.status(error.code).json(error.message)
            
        }
    }

    static login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const authentication = await UserService.authentication({email, password});
            return res.status(200).json({
                message: 'You are loged in!',
                ...authentication
            })
        } catch (err) {
            console.log(err);
            const error = this.getError(err);
            return res.status(error.code).json(error.message)   
        }

    }
}

export default UserController;
