import mongoose from "mongoose";
import environmentvarables from "../environmentVarables/environmentVarbles";



const localUrl = environmentvarables.LOCAL_URL
const dbConfig = async () => {
    try {
        const connect = await mongoose.connect(localUrl)
        console.log("Conencted to ", environmentvarables.LOCAL_URL);
        
    } catch (error) {
        console.log("An error occured in", error);
    }
}


export default dbConfig