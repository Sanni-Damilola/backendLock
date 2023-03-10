 import express from "express"
import dbConfig from "./config/db";
import environmentsvariables from "./config/environmentvarabiles";


 const app = express()
dbConfig()
 app.listen(environmentsvariables.PORT,() => {
   
    console.log("Done on port", environmentsvariables.PORT);
 })