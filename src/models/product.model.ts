import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface ProductDocument extends mongoose.Document {
  id: string;
  name: string;
  price: Number;
  updateDate: Date;
}

const productSchema = new mongoose.Schema({
  id: { type: String, unique: true, default: uuidv4() },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  updateDate: { type: Date, default: new Date() },
});

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
