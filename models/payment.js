import mongoose, { model } from "mongoose";
const { Schema } = mongoose;
const PaymentSchema = new Schema({
 name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  quantity: { type: Number, required: true },

  razorpay_order_id: { type: String, required: true },
  razorpay_payment_id: { type: String, required: true },
  razorpay_signature: { type: String, required: true },

  date: {  type: String,
  default: () => new Date().toLocaleString('en-IN'),},

});

export default model('Payment',PaymentSchema)
