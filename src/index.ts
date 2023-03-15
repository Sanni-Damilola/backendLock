import express from "express"
import appConfig from "./app";
import dbConfig from "./config/db";
import environmentvarables from "./environmentVarables/environmentVarbles";

const app = express()
const port = environmentvarables.PORT

appConfig(app)
dbConfig()
app.listen(port, () => {
    console.log("Done ", environmentvarables.PORT);
})





