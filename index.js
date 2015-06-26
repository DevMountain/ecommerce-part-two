var express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 9999,
  mongoose = require('mongoose'),
  mongoUri = 'mongodb://localhost:27017/thecommerce',
  productCtrl = require('./controllers/productCtrl'),
  userCtrl = require('./controllers/userCtrl');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

// User endpoints
// Will be using a query
app.get('/api/users', userCtrl.getUsers);
app.get('/api/user/:id', userCtrl.getUser);
app.post('/api/user', userCtrl.addUser);
app.put('/api/user/:id', userCtrl.editUser);
app.delete('/api/user/:id', userCtrl.archiveUser);

// Products endpoints
app.get('/api/products', productCtrl.getProducts);
app.post('/api/products',productCtrl.postProduct);
app.put('/api/products/:id', productCtrl.putProduct);
app.delete('/api/products/:id', productCtrl.removeProduct);

// Orders endpoints

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log('database is connected')
})
app.listen(port, function(){
  console.log('listening on port:', port);
})
