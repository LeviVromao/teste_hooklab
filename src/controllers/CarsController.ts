import { Request, Response, Router } from "express";
import { findCarById, insertNewCar } from "../repositories/CarsRepository";

const carsRouter = Router()

carsRouter.post('/getCars', async (req: Request, res: Response): Promise<Response> => {
    const { userId } = req.body
    try {
        const car = await findCarById(userId)
        return res.status(200).json(car)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
})

carsRouter.get('/insertNewCar', async (req: Request, res: Response) => {
    try {
        const newCar = await insertNewCar()
        res.status(200).json(newCar)
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
})

export default carsRouter;
