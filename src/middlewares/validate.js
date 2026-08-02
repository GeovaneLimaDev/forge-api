import { AppError } from "../config/error.js"

const validator = (schema) => {
    return (req, res, next) => {

        const result = schema.safeParse(req.body)
        
        if(!result.success){
            const message = result.error.issues.map(issue => issue.message)

            throw new AppError(message.join(' <br> '), 400, 'INVALID_DATA')
        }

        next()
    }
}

export default (validator)