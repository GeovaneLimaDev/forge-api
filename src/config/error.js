//arquivo de criação da class de erro 
export class AppError {
    constructor(message, statusCode, code) {
        this.message = message,
        this.statusCode = statusCode,
        this.code = code
    }
}