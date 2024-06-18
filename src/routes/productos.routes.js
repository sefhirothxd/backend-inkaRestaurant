import { Router } from 'express';
import {
	createProducto,
	deleteProducto,
	getProductos,
	getProductosById,
	updateProducto,
} from '../controllers/productos.controller.js';

const router = Router();

router.get('/productos', getProductos);
router.get('/productos/:id', getProductosById);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProducto);
router.delete('/productos/:id', deleteProducto);

export default router;
