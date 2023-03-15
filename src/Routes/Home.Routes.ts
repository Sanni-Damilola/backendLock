import {Router, Response, Request, NextFunction} from "express"

const router = Router()

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
      return  res.status(200).json({
            message: "I just want to be Happy 🥰✨😊🤡"
        })
    } catch (error) {
        next(error)
    }
})


export default router