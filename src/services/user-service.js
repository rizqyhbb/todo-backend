import { user } from '../models'

class UserService {
    static getAllUser = async () => {
        const users = await user.findAll()
        return users
    }
}

export default UserService;
