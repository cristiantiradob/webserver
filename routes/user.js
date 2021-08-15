const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const userControllers = require('../controllers/usuarios');
const validarCampos = require('../middlewares/validar-campos');
const {esRoleValido, emailExiste} = require('../helpers/db-validators');

router.get('/', userControllers.usuariosGet)
router.put('/:id', userControllers.usuariosPut)
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(emailExiste),
    check('rol').custom(esRoleValido),
    validarCampos
], userControllers.usuariosPost)
router.delete('/', userControllers.usuariosDelete)

module.exports = router;