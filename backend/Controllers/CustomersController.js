import CustomersModel from '../Models/CustomerModel.js';


export const getAllCustomers = async (req , res) =>{

    try{
        const customers = await CustomersModel.find();
        res.status(200).json(customers);

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const createCustomer = async (req , res)=>{
    const {name , phone ,email , address} = req.body;
    try{
        const newCustomer = new CustomersModel({
            name,
            phone,
            email,
            address
        });
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

export const getCustomerById = async (req , res) =>{
    const {id} = req.params;

    try{
        const customer  = await CustomersModel.findById(id);
        res.status(200).json(customer);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const updateCustomer = async (req , res) =>{

    try{
        const {id} = req.params;
        const updatedCustomer = await CustomersModel.findByIdAndUpdate(id , req.body , {new:true});
        res.status(200).json(updatedCustomer);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

export const getCustomerByPhone = async (req , res) =>{
    const {phone} = req.params;

    try{
        const customer  = await CustomersModel.findOne({phone: phone});
        res.status(200).json({
            found: customer ? true : false,
            customer: customer ? customer : null
        });
    }catch(err){
        res.status(404).json({message: err.message});
    }

}