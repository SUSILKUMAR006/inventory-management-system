import express from 'express';
import ProductsRouter from './Routers/ProductsRouter.js';
import connectDB from './DB/db.js';

const app = express();
connectDB();
app.use(express.json());

app.use('/api' , ProductsRouter);

app.get('/' , (req , res)=>{
    res.send("Server is running");
})

app.listen(5000 , ()=>{
    console.log("Server is running on port 5000");
})

