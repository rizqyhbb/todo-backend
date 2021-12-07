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
            case ERRORS.UNAUTHORIZED: return {
                code: 401,
                message: 'Unauthorized'
            }
            case ERRORS.FORBIDDEN: return {
                code: 403,
                message: 'Forbidden'
            }
            case ERRORS.INTERNAL_SERVER_ERROR: return {
                code: 500,
                message: 'Internal Server Error'
            }
        }
    }
}

export default BaseController;
