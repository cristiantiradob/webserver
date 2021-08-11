const { response } = require('express');

const controller = {
    usuariosGet: (req, res) => {
        return res.status(200).send({msg: 'get API - controlador'});
    },
    usuariosPut: (req, res) => {
        return res.status(200).send({msg: 'get API - controlador'});
    },
    usuariosPost: (req, res) => {
        const body = req.body;
        return res.status(200).send(body);
    },
    usuariosDelete: (req, res) => {
        return res.status(200).send({msg: 'get API - controlador'});
    }
}

module.exports = controller