const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  itemname: String,
  customeremail: String,
  // other fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;