/** @format */

import mongoose, { Schema, Model } from "mongoose";

import { Iuser } from "../interface/userInterface";
import isEmail from "validator/lib/isEmail";

const userSchema: Schema<Iuser> = new Schema(
  {
    name: { type: String, required: [true, "Please Enter Your name"] },
    email: {
      type: String,
      required: [true, "Please Enter Your name"],
      validate: [isEmail, "Enter correct Email"],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Input Your Password"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Input Your Password"],
    },
    role: {
      enum: ["user", "admin", "manager"],
      message: ["you must either be a user, admin or manager"],
      default: "user",
    },
  },
  { timestamps: true },
);

export default mongoose.model<Iuser>("user", userSchema)
