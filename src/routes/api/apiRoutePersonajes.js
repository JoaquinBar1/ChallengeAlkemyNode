const express = require('express');
const router = express.Router()

const personajesController = require('../../controllers/api/apiControllerPersonajes')

router.get('/', personajesController.list);

router.get('/?', personajesController.search);

router.get('/detail/:id', personajesController.detail);

router.post('/create', personajesController.create);

router.put('/edit/:id', personajesController.edit);

router.delete('/delete/:id', personajesController.delete);


module.exports = router