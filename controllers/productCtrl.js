var mongoose = require('mongoose');
var productSchema = require('../models/productSchema');
var Product = mongoose.model('Product', productSchema);

module.exports = {
  getProducts: function(req, res){
    Product.find(req.query).exec(function(err, result){
      if(err){
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    })
  },

  postProduct: function(req, res){
    var newProduct = new Product(req.body);
    newProduct.save(function(err, result){
      if(err){
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    })
  },

  putProduct: function(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.status(500).json(err);
      } else {
        res.json(result);
      };
    });
  },
// Recognize that in reality, a product will probably not be removed
// from the database. It will likely be archived. But, this works
// in our simple case to demonstrate how to remove a document
// from the database.
  removeProduct: function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err, result){
      if(err){
        res.status(500).json(err);
      } else {
        res.json(result);
      };
    });
  }
}
