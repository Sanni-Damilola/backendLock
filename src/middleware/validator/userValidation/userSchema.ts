/** @format */

import joi from "joi";

export const userSchema = {
  register: joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    confirmPassword: joi.string().valid(joi.ref("password")),
  }),

  login: joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  }),
};
