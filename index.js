require ('dotenv').config();
const express = require('express');
const router = require('./app/router');
const PORT = process.env.PORT || 5000; 
const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')




app.use(router);
app.use((req, res) => 
{
  res.render('404');
});

app.listen(PORT, () => 
{
  console.log(`Listening on ${PORT}`);
});