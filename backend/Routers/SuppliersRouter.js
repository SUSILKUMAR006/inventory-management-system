import {getAllSuppliers , createSupplier} from '../Controllers/SuppliersController.js';
import express from 'express';

const router = express.Router();

router.get('/suppliers' , getAllSuppliers);
router.post('/add-supplier' , createSupplier);

export default router;