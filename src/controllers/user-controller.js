import UserService from "../services/user-service";

class UserController {
    static getAllUser = async (req, res) => {
        try {
            const users = await UserService.getAllUser();
            res.status(200).json(users)

        } catch (err) {
            console.log(err)
        }
    }
}

export default UserController;
