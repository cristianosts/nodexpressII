import { Router } from "express";
import { router as ProductRoutes } from "./products.routes";
import { router as ItemRoutes } from "./items.routes";


const MainRoute = Router() 

MainRoute.use(ProductRoutes)
MainRoute.use(ItemRoutes)

export { MainRoute }