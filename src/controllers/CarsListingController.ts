import { Router, Request, Response } from "express";
import { deleteOldListings } from "../repositories/CarsListingRepository"

const carsListingRouter = Router()

carsListingRouter.post('/deleteOldListings', async (_req:Request , res: Response) => {
   try {
    await deleteOldListings()
    res.status(200).json({message: 'Anúncios antigos deletados com sucesso.'})
   } catch (error) {
    res.status(500).json({message: 'Erro ao deletar anúncios antigos ',error})
   }
})

export default carsListingRouter