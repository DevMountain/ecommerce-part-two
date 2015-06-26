var mongoose = require('mongoose');
var User = require('../models/userSchema');
var productSchema = require('../models/productSchema');
var Product = mongoose.model('Product', productSchema);

module.exports = {
  getUsers: function(req, res){
    User.find(req.query).exec(function(err, result){
      if(err) {
        res.status(500).json(err);
      } else {
        res.json(result);
      };
    });
  },
  getUser: function(req, res){
    User.findById(req.params.id, function(err, theUser){
      if(err) {
        res.status(500).json(err);
      } else {
          var options = {
            path: 'cart.products.product',
            model: 'Product'
          };
          Product.populate(theUser, options, function(err, user){
            if(err){
              res.status(500).json(err);
            } else {
              res.json(user);
            };
          });
      };
    })
  },
  addUser: function(req, res){
    var newUser = new User(req.body);
    newUser.save(function(err, result){
      if(err){
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    })
  },
  editUser: function(req, res){
    User.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    })
  },
  archiveUser: function(req, res){
    req.body.status = 'archived';
    User.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.status(500).json(err);
      } else {
        res.json(result);
      };
    })
  }
};
