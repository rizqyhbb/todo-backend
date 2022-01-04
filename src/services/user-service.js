import { user } from '../models'
import ERRORS from '../config/errors'
import { compareHash, generateHash } from '../utils/encryption'
import jwt from 'jsonwebtoken'
import 'regenerator-runtime/runtime';

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
            email: findUser.email,
            first_name: findUser.first_name,
            last_name: findUser.last_name            
        },process.env.SECRET_KEY)
        const decode = jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
            console.log(err)
            if(err){
                return res.status(403).json(ERRORS.FORBIDDEN)
            }
            return decode
        })
        return {token, decode}
    }
}

export default UserService;
