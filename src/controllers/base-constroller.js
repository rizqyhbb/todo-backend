import ERRORS from "../config/errors";

class BaseController {
    static getError = (err) => {
        switch (err.message) {
            case ERRORS.NOT_FOUND: return {
                code: 404,
                message: 'Not Found'
            }
            case ERRORS.EMAIL_ALREADY_EXIST: return {
                code: 400,
                message: 'Email Already Exist'
            }
            case ERRORS.BAD_REQUEST: return {
                code: 400, 
                message: 'Bad Request'
            }
            case ERRORS.EMAIL_NOT_FOUND: return {
                code: 400,
                message: 'Email Not Found'
            }
            case ERRORS.WRONG_EMAIL_OR_PASSWORD: return {
                code: 400,
                message: 'Wrong Email Or Password'
            }
        }
    }
}

export default BaseController;
