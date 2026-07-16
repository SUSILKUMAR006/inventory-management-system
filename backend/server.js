import express from 'express';
import ProductsRouter from './Routers/ProductsRouter.js';
import connectDB from './DB/db.js';
import cors from 'cors';
import SuppliersRouter from './Routers/SuppliersRouter.js';
import CustomersRouter from './Routers/CustomersRouter.js';

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api' , ProductsRouter);
app.use('/api' , CustomersRouter);
app.use('/api' , SuppliersRouter);

app.get('/' , (req , res)=>{
    res.send("Server is running");
})

app.listen(5000 , ()=>{
    console.log("Server is running on port 5000");
})

