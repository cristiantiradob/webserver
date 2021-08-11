const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    }).status(200);
}

const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    }).status(200);
}

const usuariosPost = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    }).status(200);
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    }).status(200);
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}