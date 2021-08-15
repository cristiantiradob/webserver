const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const userControllers = require('../controllers/usuarios')

router.get('/', userControllers.usuariosGet)
router.put('/', userControllers.usuariosPut)
router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
] ,userControllers.usuariosPost)
router.delete('/', userControllers.usuariosDelete)

module.exports = router;