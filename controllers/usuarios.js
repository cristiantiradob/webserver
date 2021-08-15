const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const controller = {
    usuariosGet: (req, res) => {
        // Obteniendo querys
        const { q, nombre, apikey } = req.query;

        return res.status(200).send({ "q": q, "nombre": nombre, "apikey": apikey });
    },
    usuariosPut: async (req, res) => {
        const { id } = req.params;
        const { password, google, correo, ...resto } = req.body;

        // TODO validar contra base de datos
        if (password) {
            // Encriptar la contraseña
            const salt = bcryptjs.genSaltSync(10);
            resto.password = bcryptjs.hashSync(password, salt);
        }

        const usuario = await Usuario.findByIdAndUpdate(id, resto, {new: true});

        return res.status(200).send(usuario);
    },
    usuariosPost: async (req, res) => {

        const { nombre, correo, password, rol } = req.body;
        const usuario = new Usuario({ nombre, correo, password, rol });

        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync(10);
        usuario.password = bcryptjs.hashSync(password, salt);

        // Guardar en DB
        await usuario.save();

        return res.status(200).send({ usuario });
    },
    usuariosDelete: (req, res) => {
        return res.status(200).send({ msg: 'get API - controlador' });
    }
}

module.exports = controller