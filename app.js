const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require ('method-override');
const port = 3009;



const peliculasRoutes = require('./src/routes/api/apiRoutePeliculas')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.use('/movies', peliculasRoutes);



app.listen(port, () => {
    console.log(`servidor corriendo en puerto ${port}`)
  })


module.exports = app;
