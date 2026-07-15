import ProductModel from '../Models/ProductsModel.js';

export const getProducts = async (req , res) =>{

    try{
        const products = await ProductModel.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const createProduct = async (req , res) =>{

    try{
        const product = req.body;
        const newProduct = new ProductModel(product);
        await newProduct.save();
        res.status(201).json(newProduct);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const deleteProduct = async (req , res) =>{

    try{
        const { id } = req.params;
        await ProductModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully" });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}