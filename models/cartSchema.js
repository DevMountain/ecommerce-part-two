var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', require: true },
    quantity: { type: Number, min: 0, default: 1 }
  }],
  updatedAt: { type: Date, default: Date.now }
});

cartSchema.pre('update', function(next){
  this.updatedAt = new Date();
  next();
})

module.exports = cartSchema;
