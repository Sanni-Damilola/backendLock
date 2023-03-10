 import express from "express"
import environmentsvariables from "./config/environmentvarabiles";


 const app = express()

 app.listen(environmentsvariables.PORT,() => {
   
    console.log("Done on port", environmentsvariables.PORT);
 })