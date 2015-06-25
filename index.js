var express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 9999,
  mongoose = require('mongoose'),
  mongoUri = 'mongodb://localhost:27017/thecommerce',
  productCtrl = require('./productCtrl');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/api/products', productCtrl.getProducts);
app.post('/api/products',productCtrl.postProduct);
app.put('/api/products/:id', productCtrl.putProduct);
app.delete('/api/products/:id', productCtrl.removeProduct);

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log('database is connected')
})
app.listen(port, function(){
  console.log('listening on port:', port);
})
