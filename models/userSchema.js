var mongoose = require('mongoose');
var cartSchema = require('./cartSchema');

var userSchema = new mongoose.Schema({
  name: { type: String, index: true, lowercase: true },
  email: { type: String, required: true, index: true, unique: true},
  status: { type: String, enum: ['active', 'archived'], default: 'active'},
  cart: [cartSchema]
})

module.exports = mongoose.model('User', userSchema);
