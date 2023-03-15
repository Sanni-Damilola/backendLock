/** @format */

import joi from "joi";

import { NextFunction } from "express";
import { AppError, HttpCode } from "../../utils/ErrorHandler/index";

export const validator = (
  shemaName: joi.ObjectSchema,
  body: object,
  next: NextFunction,
) => {
  const value = shemaName.validate(body, {
    allowUnknown: false,
    stripUnknown: true,
    abortEarly: true,
  });

  try {
    value.error
      ? next(
          new AppError({
            httpCode: HttpCode.UNPROCESSABLE_IDENTITY,
            message: value.error.details[0].message,
          }),
        )
      : next();
  } catch (error: any) {
    next(
      new AppError({
        httpCode: HttpCode.UNPROCESSABLE_IDENTITY,
        message: error,
      }),
    );
  }
};
