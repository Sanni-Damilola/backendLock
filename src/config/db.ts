import mongoose from "mongoose";
import environmentsvariables from "./environmentvarabiles";

const localUrl = environmentsvariables.LOCAL_DATABASE

const dbConfig = async() => {
    try {
        const connet = await mongoose.connect(localUrl)
        console.log("Connected To", localUrl);

    } catch (error) {
        console.log("An Error Occured in db", error);
        
    }
}

export default dbConfig