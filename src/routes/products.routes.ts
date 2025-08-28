import { Router, Request, Response } from "express";
import { get, getById } from "../repositories/products.repository";

const router = Router()

router.get('/products', (req: Request, res: Response) => {
    res.send(get())
})

router.get('/products/:id', (req: Request, res: Response) => {
    const param = req.params.id
    res.send(getById(parseInt(param)))
})

export { router }