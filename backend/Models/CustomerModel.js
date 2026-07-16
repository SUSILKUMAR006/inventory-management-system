    import mongoose  from "mongoose";

    const CustomerSchema = new mongoose.Schema({

        name:{type:String, required:true},
        phone:{type:String, required:true , unique:true},
        email:{type:String, required:true},
        address:{type:String, required:true},

    }, {timestamps:true});

    const CustomerModel = mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);

export default CustomerModel;