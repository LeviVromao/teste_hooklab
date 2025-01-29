import { Router, Request, Response } from "express";
import { updateInactiveUsers } from "../repositories/UsersRepository";

const usersRouter = Router()

usersRouter.post('/', async (_req:Request , res: Response) => {
    await updateInactiveUsers()
})

export default usersRouter