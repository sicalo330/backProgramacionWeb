import { Router } from "express";
import { deleteProducts, getProducts, postProducts, putProducts } from "../controllers/productsController";

const router = Router()
export default router

router.get('/v1/products', getProducts)
router.post('/v1/postProducts', postProducts)
router.put('/v1/putProducts', putProducts)
router.delete('/v1/:id', deleteProducts)