import dotenv from "dotenv";

dotenv.config();

const environmentsvariables = {
  PORT: process.env.PORT as string,
  LOCAL_DATABASE: process.env.LOCAL_DATABASE as string,
};

export default environmentsvariables;
