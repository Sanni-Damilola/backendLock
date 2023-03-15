import dotenv from "dotenv"

dotenv.config()

const environmentvarables = {
    PORT : process.env.PORT as string,
    LOCAL_URL: process.env.LOCAL_URL as string
}


export default environmentvarables;