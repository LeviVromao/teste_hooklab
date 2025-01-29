import { Router } from "express";
import carsRouter from "../controllers/CarsController";
import usersRouter from "../controllers/UsersController";
import reviewRouter from "../controllers/ReviewController";
import carsListingRouter from "../controllers/CarsListingController";

const routers = Router()

routers.use('/cars', carsRouter)
routers.use('/updateUsers', usersRouter)
routers.use('/review', reviewRouter)
routers.use('/carsListing', carsListingRouter)

export default routers;