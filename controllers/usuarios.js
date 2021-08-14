const { response } = require('express');

const controller = {
    usuariosGet: (req, res) => {
        // Obteniendo querys
        const {q, nombre, apikey} = req.query;

        return res.status(200).send({"q": q, "nombre": nombre, "apikey": apikey});
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