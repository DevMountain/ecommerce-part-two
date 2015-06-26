var mongoose = require('mongoose');
var Product = require('./productSchema');

var orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true, index: true },
  products: [{
    // I'm not sure if this embedded will work
    product: [Product],
    quantity: { type: Number, min: 1, default: 1 }
  }]
})

module.exports = mongoose.model('Order', orderSchema);
