/** @format */

import express, {
  Request,
  Response,
  NextFunction,
  Application,
  response,
} from "express";
import cors from "cors";
import morgan from "morgan";
import api from "./api";
import { AppError, HttpCode } from "./utils";
import { errorHandler } from "./utils/ErrorHandler/asyncHandler";

const appConfig = (app: Application) => {
  app.use(express.json()).use(cors()).use(morgan("dev"));

  app
    .use("/api", api)
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppError({
          message: `This Route  ${req.originalUrl} is not found`,
          httpCode: HttpCode.NOT_FOUND,
        }),
      );
    })

    .use(errorHandler);
};

export default appConfig;
