import jwt from "jsonwebtoken";
import ERRORS from "../config/errors"

const authentication = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]
        if(!token) {
            return res.status(401).json(ERRORS.UNAUTHORIZED)
        }
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            console.log(err)
            if(err){
                return res.status(403).json(ERRORS.FORBIDDEN)
            }
            req.user = user
            next()
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json(ERRORS.INTERNAL_SERVER_ERROR)
    }
}

export default authentication;
