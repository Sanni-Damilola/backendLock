import dotenv from "dotenv"

dotenv.config()

const environmentsvariables = {
    PORT: process.env.PORT as string
}

export default environmentsvariables