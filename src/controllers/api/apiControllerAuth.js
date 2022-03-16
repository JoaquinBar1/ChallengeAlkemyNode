const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../../database/models');



const authController = {
    list: (req, res) => {
        db.Usuario
            .findAll()
                .then((usuarios) => {
                    return res.status(200).json({
                        meta: {
                            data: usuarios,
                            status: 200,
                            msg: 'lista de usuarios'
                        }
                    })
                })
    },

    register: (req, res) => {
        
        let { email, password } = req.body;

        const errores = validationResult(req);

        if(errores.errors.length){
            return res.status(500).json({
                meta: {
                    status: 500,
                    msg: 'los datos no fueron completados de manera correcta',
                },
                errors: errores.mapped()
            })
        }else {
            let email = req.body.email
            db.Usuario.findOne({
                where: {
                    email: email
                }
            })
            .then((usuarioEncontrado) => {
                if(usuarioEncontrado != undefined){
                    return res.status(500).json({
                        status: 500,
                        msg: 'el usuario ya se encuentra registrado',
                    })
                }else {
                    db.Usuario
                        .create({
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 12)
                        })
                        .then(res.status(200).json({
                            msg: 'usuario creado con exito'
                        }))
                }
            })
        }

    },
    login: (req, res) => {
        let email = req.body.email

        db.Usuario.findOne({
            where: {
                email: email
            }
        })
        .then((usuarioALoguearse) => {
            if(usuarioALoguearse == null){
                return res.status(500).json({
                    msg: 'usuario no registrado'
                })
            }else if (!bcrypt.compareSync(req.body.password, usuarioALoguearse.password)){
                return res.status(400).json({
                    msg: 'la contraseña no coincide'
                })
            }else {
                let token = jwt.sign({email}, 'tokenKey', (err, token)=> {
                    res.status(200).json({
                        token,
                        msg: 'usuario ingresado con exito'
                    })
                })
            }
        })
        .catch(err => console.log(err))
    }
}

module.exports = authController;