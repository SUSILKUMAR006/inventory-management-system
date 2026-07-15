import express from 'express';
import {getProducts , createProduct , deleteProduct} from '../Controllers/ProductsController.js';

const router = express.Router();

router.get('/products' , getProducts);
router.post('/add-product' , createProduct);
router.delete('/products/:id' , deleteProduct);

export default router;