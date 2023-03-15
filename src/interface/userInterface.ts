/** @format */

import { Document } from "mongoose";

export interface Iuser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  confirmPassword: string;
}
