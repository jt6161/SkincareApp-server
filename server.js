const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const products = require('./routes/productRoutes');
const testimonials = require('./routes/testimonialRoutes');
const thcproducts = require('./routes/thcproductRoutes');
const medibles = require('./routes/mediblesRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', products);
app.use('/testimonials', testimonials);
app.use('/thcproducts', thcproducts);
app.use('/medibles', medibles)

app.listen(port, function() {
  console.log("listening on port: ", port);
})
