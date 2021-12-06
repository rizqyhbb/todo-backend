import { user } from '../models'
import ERRORS from '../config/errors'
import { generateHash } from '../utils/encryption'

class UserService {
    static getAllUser = async () => {
        const users = await user.findAll()
        return users
    }

    static register = async ({
        email, 
        password, 
        first_name, 
        last_name, 
    }) => {
        if (!email || !password|| !first_name || !last_name){
            throw new Error(ERRORS.BAD_REQUEST)
        }
        const findUser = await user.findOne({
            where: {email}
        })
        if(findUser){
            throw new Error(ERRORS.EMAIL_ALREADY_EXIST)
        }
        
        const hashedPassword = generateHash(password)
        const createUser = await user.create({
            email,
            password: hashedPassword,
            first_name,
            last_name
        })
        return createUser
    }
}

export default UserService;
