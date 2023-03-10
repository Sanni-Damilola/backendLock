import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { erroHandeler } from "./middleware/errorHandler";

export const appConfig = (app: Application) => {
  app.use(express.json()).use(cors()).use(morgan("dev"))
  .all("*", (req: Request, res: Response, next: NextFunction) => {
res.status(404).json({
  message: `This route ${req.originalUrl} is not found`
})
  })
  // ErrorHandler
  .use(erroHandeler)
};
