import { Router, Request, Response } from "express";
import { get, getById } from "../repositories/items.repository";

const router = Router()

router.get('/items', (req: Request, res: Response) => {
    res.send(get())
})

router.get('/items/:id', (req: Request, res: Response) => {
    const param = req.params.id
    res.send(getById(parseInt(param)))
})

export { router }