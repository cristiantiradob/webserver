const { response } = require('express');
const Usuario = require('../models/usuario')

const controller = {
    usuariosGet: (req, res) => {
        // Obteniendo querys
        const {q, nombre, apikey} = req.query;

        return res.status(200).send({"q": q, "nombre": nombre, "apikey": apikey});
    },
    usuariosPut: (req, res) => {
        return res.status(200).send({msg: 'get API - controlador'});
    },
    usuariosPost: async(req, res) => {
        const body = req.body;
        const usuario = new Usuario(body);

        await usuario.save();

        return res.status(200).send({usuario});
    },
    usuariosDelete: (req, res) => {
        return res.status(200).send({msg: 'get API - controlador'});
    }
}

module.exports = controller