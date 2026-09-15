const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  name: String,
  price: String,
});

const orderSchema = new Schema({
  items: [orderItemSchema],
  totalAmount: String,
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
