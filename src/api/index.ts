import { Router } from "express";
import HomeRoute from "../Routes/Home.Routes"

const router = Router()


router.get("/", HomeRoute)


export default router