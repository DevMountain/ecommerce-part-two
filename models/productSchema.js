var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, required: true},
  price: { type: Number, required: true}
})

module.exports = productSchema;
// module.exports = mongoose.model('Product', productSchema);
