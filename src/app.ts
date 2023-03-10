import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { erroHandeler } from "./middleware/errorHandler";

export const appConfig = (app: Application) => {
  app.use(express.json()).use(cors()).use(morgan("dev"))
  .all()
  // ErrorHandler
  .use(erroHandeler)
};
