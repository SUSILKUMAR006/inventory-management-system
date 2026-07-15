import mongoose from "mongoose";

const SuppliersSchema = new mongoose.Schema({

    supplierName :{ type: String, required: true },
    productName :{ type: String, required: true },
    productPrice :{ type: Number, required: true },
    email :{ type: String, required: true },
    address :{ type: String, required: true },
    company :{ type: String, required: true },
    phoneNo :{ type: String, required: true },

})

export default mongoose.models.Suppliers || mongoose.model("Suppliers", SuppliersSchema);