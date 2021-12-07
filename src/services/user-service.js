import { user } from '../models'
import ERRORS from '../config/errors'
import { compareHash, generateHash } from '../utils/encryption'
import jwt from 'jsonwebtoken'

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

    static authentication = async ({
        email, 
        password
    }) => {
        if(!email || !password){
            throw new Error(ERRORS.BAD_REQUEST)
        }

        const findUser = await user.findOne({
            where: {email},
        })
        if(!findUser){
            throw new Error(ERRORS.EMAIL_NOT_FOUND)
        }
        
        const comparePassword = compareHash(password, findUser.password)
        if(!comparePassword){
            throw new Error(ERRORS.WRONG_EMAIL_OR_PASSWORD)
        }
        const token = jwt.sign({
            id_user: findUser.id_user,
            email: findUser.email            
        },process.env.SECRET_KEY)
        return token;
    }
}

export default UserService;
