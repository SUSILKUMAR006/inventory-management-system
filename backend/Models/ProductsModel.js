import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    ProductName:{ type: String, required: true },
    Price:{ type: Number, required: true },
    Description:{ type: String, required: false },
    Stock:{type: Number, required: true},
    SellingPrice:{type: Number, required: true},
    NoOfLeft:{type: Number, required: true},
    TotalStock:{type: Number, required: true},
    LastStockFilled:{type: Date, required: true},
})

export default mongoose.models.Products || mongoose.model("Products", productSchema);

