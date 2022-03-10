const express = require('express');
const router = express.Router();

const peliculasController = require('../../controllers/api/apiControllerPeliculas');

router.get('/', peliculasController.list)

router.get('/detail/:id', peliculasController.detail)

router.post('/create', peliculasController.create)

router.put('/edit/:id', peliculasController.edit)

router.delete('/delete/:id', peliculasController.delete);

//router.get('/:name?/:genre?/:order?', peliculasController.search);


module.exports = router;