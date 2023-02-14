const { response } = require('express')
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario')



const usuariosGet = (req, res = response) => {
    const {
        nombre,
        correo,
        password,
        rol,
        apellido
    } = req.query
    res.json({
        msg: 'GET api',
        nombre,
        apellido
    })
}

const usuariosPost = async (req, res = response) => {


    const { nombre, correo, password, rol } = req.body

    const userExists = await Usuario.findOne({ correo })

    if (userExists) {
        return res.status(400).json({
            msg: 'Este email ya pertenece a un usuario'
        })
    }
    
    const usuario = new Usuario({ nombre, correo, password, rol })

    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password, salt)

    await usuario.save()

    res.json({
        msg: 'Post api',
        nombre, edad,
        usuario
    })
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params
    res.json({
        msg: 'Put api',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete api'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}