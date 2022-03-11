const db = require('../../database/models')
const { Op } = require('sequelize')
const { validationResult } = require('express-validator')

const personajesController = {
    list: (req, res) => {
        db.Personaje
            .findAll({
                attribute: ['nombre', 'imagen']
        })
        .then((personajes) => {
            return res.status(200).json({
                meta: {
                    total: personajes.length,
                    status: 200,
                    msg: "Listado de personajes",
                },
                data: personajes,
            })
        })
        .catch(err => res.send(err))
    },
    detail: (req, res) => {
        let id = req.params.id
        db.Personaje
            .findByPk(id)
                .then((personaje) => {
                    return res.status(200).json({
                        meta: {
                            data: personaje,
                            status:200
                        }
                })
            })
            .catch(err => res.send(err))
    },
    create: (req, res) => {
        const { nombre, edad, peso, historia, iamgen } = req.body;

        const errores = validationResult(req);

        if(errores.errors.length){
            return res.send(404).json({
                meta: {
                    status: 404,
                    msg: "ocurrio un error"
                },
                errors: errores.mapped(),
            });
        }
        db.Personaje
            .create({
                nombre, edad, peso, historia, iamgen
        })
        .then((personaje) => {
            return res.status(200).json({
                meta: {
                    status:200, 
                    msg: "personaje creado!"
                },
                data: personaje
            })
        })
        .catch(err => res.send(err))
    },
    edit: (req, res) => {
        const id = req.params.id
        const { nombre, edad, peso, historia, imagen } = req.body;

        const errores = validationResult(req);

        if(errores.errors.length){
            return res.status(404).json({
                meta: {
                    status: 404,
                    msg: "Algo salió mal"
                },
                errors: errores.mapped()
            })
        }
        db.Personaje
            .update({
                nombre, edad, peso, historia, imagen
        },{
            where: { id }
        })
        .then((personaje) => {
            return res.status(200).json({
                meta: {
                    status: 404,
                    msg: "Personaje editado con exito"
                },
                data: personaje
            })
        })
        .catch(err => res.send(err))
    }, 
    // search: (req, res) => {
    //     db.Personaje
    //         .findAll({
    //             include: ['pelicula'],
    //             where:{
    //                 nombre: { [Op.like]:'%'+ req.query.keyword +'%'}
    //             }
    //         })
    //         .then(personaje => {
    //             return res.status(200).json({
    //                 data: personaje,
    //                 peliculas: personaje.peliculas
    //             })
    //         })
    // },
    delete: (req, res) => {
        db.Personaje
            .destroy({
                where: { id: req.params.id }
        })
        .then((personaje) => {
            return res.status(200).json({
                meta: {
                    status: 200,
                    msg: "Personaje Eliminado de Base de datos",
                    data: personaje
                }
            })
        })
        .catch(err => res.send(err)) 
    }

}

module.exports = personajesController