const db = require('../../database/models');
const { Op } = require('sequelize')
const { validationResult } = require('express-validator')

 
const peliculasController = {
    list: (req, res) => {
        db.Pelicula.findAll({
            atrributes: ['titulo', 'imagen', 'fecha_creacion']
        })
            .then((pelicula) => {
                return res.status(200).json({
                    meta: {
                        total: pelicula.length,
                        msg: 'Listado de Peliculas',
                        url: '/api/peliculas',
                        data: pelicula,
                    }
                })
            })
            .catch(err => res.send(err))
    },
    detail: (req, res) => {
        db.Pelicula.findByPk(req.params.id, {include: ['personajes', 'generos']})
            .then((pelicula) => {
                return res.status(200).json({
                    data: pelicula,
                    status: 200
                })
            })
            .catch(err => res.send(err))
    },
    create: (req, res) => {
        const { titulo, imagen, fecha_estreno, rating, genero_id } = req.body; 

        const errores = validationResult(req)

        if(errores.errors.length){
            return res.status(404).json({
                meta: {
                    status: 404,
                },
                errors: errores.mapped()
            })
        }

        db.Pelicula.create({
            titulo, imagen, fecha_estreno, rating, genero_id
        })
        .then((pelicula) => {
            return res.status(200).json({
                meta:{
                    status: 200,
                    msg: 'pelicula agregada'
                },
                data: pelicula
            })
        })
        .catch(err => res.send(err))
    },
    edit: (req, res) => {
        let id = req.params.id

        const { titulo, imagen, fecha_estreno, rating, genero_id } = req.body;

        const errores = validationResult(req);

        if(errores.errors.length){
            return res.status(404).json({
                meta: {
                    status: 404,
                    msg: 'Algo salio mal'
                },
                errors: errores.mapped()
            })
        }
        const pelicula = db.Pelicula.findByPk(id)

        db.Pelicula.update({
             titulo, imagen, fecha_estreno, rating, genero_id
        }, {
            where: {id}
        })
        .then(pelicula => {
            return res.status(200).json({
                meta:{
                    status: 200,
                    msg: 'Pelicula Editada'
                },
                data: pelicula
            })
        })
        .catch(err => res.send(err))
    },
    delete: (req, res) => {
        db.Pelicula
            .destroy({
                where: {id: req.params.id}
        })
        .then((pelicula) => {
            return res.status(200).json({
                data: pelicula,
                msg: "Pelicula Eliminada",
                status:200,
            })
        })
    }, 
    // search: (req, res) => {
    //     const { name, genre, order } = req.query;
        
    //     if(name) {
    //         pelicula = db.Pelicula.findAll({
    //             where: {
    //                 titulo: {[Op.like]: '%' + `${name}` +'%'}
    //             }
    //         })
    //     }
    //     if(genre){
    //         pelicula = db.Pelicula.findAll({
    //             where: {
    //                 genero_id: {[Op.like]: '%' + `${genre}` + '%'}
    //             }
    //         }) 
    //     }
    //     if(order){
    //         pelicula = db.Pelicula.findAll({
    //             order: [
    //                 'ASC', 'DESC'
    //             ]
    //         })
    //     }
    //     res.status(200).json(pelicula)
    // }

    
}

module.exports = peliculasController; 