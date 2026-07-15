import SuppliersModel from '../Models/SuppliersModel.js';

export const getAllSuppliers = async (req , res) =>{
    try{

        const suppliers = await SuppliersModel.find();
        res.status(200).json(suppliers);

    }catch(err){   
        res.status(500).json({message : err.message});
    }
}


export const createSupplier = async (req , res) =>{
    const { supplierName , productName , productPrice , email , address , company , phoneNo } = req.body;

    try{
        const newSupplier = new SuppliersModel({
            supplierName,
            productName,
            productPrice,
            email,
            address,
            company,
            phoneNo
        });

        const savedSupplier = await newSupplier.save();
        res.status(201).json(savedSupplier);
    }catch(err){
        res.status(400).json({message : err.message});
    }
}

