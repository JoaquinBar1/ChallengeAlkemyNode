const express = require('express');
const app = express();
const methodOverride = require ('method-override');
// const jwt = require('jsonwebtoken');

const port = 3009;


const authRoutes = require('./src/routes/api/apiRouteAuth');
const peliculasRoutes = require('./src/routes/api/apiRoutePeliculas');
const personajesRoutes = require('./src/routes/api/apiRoutePersonajes');
// const keys = require('./src/settings/key');

// app.set('key', keys.key);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));



app.use('/auth', authRoutes);
app.use('/movies', peliculasRoutes);
app.use('/characters', personajesRoutes);


app.listen(port, () => {
    console.log(`servidor corriendo en puerto ${port}`)
  });


module.exports = app;
