// const express = require('express');
// const reactViews = require('express-react-views');

import express from 'express';
import reactViews from 'express-react-views';

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
app.use('/public', express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.get('/', (req, res) => {
	 res.render('home');
 
})



app.listen((err) => {
  if (err) console.log(err);
  console.log(`server is up!`)
})
