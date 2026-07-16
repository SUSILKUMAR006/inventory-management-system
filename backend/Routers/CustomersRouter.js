import express from 'express';
import { getAllCustomers, createCustomer, getCustomerById, updateCustomer , getCustomerByPhone} from '../Controllers/CustomerController.js';

const router = express.Router();

router.get('/', getAllCustomers);
router.post('/', createCustomer);
router.get('/:id', getCustomerById);
router.put('/:id', updateCustomer);
router.get('/phone/:phone', getCustomerByPhone);

export default router;