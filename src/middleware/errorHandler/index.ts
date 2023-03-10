import { NextFunction, Request, Response } from "express"
import { AppError, HttpCode } from "../../config/utils/AppError"




const devError = (err: AppError, res: Response) => {
    return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
        message: err.message,
        stack: err.stack,
        status: err.httpCode,
        error: err
    })
}

export const erroHandeler = (err: AppError , req: Request, res: Response, next: NextFunction) => {
devError(err, res)
}