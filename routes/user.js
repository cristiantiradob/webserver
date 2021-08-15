const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const userControllers = require('../controllers/usuarios');
const validarCampos = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorId, esNumero } = require('../helpers/db-validators');

router.get('/', [
    check('from').custom(esNumero),
    check('limit').custom(esNumero),
    validarCampos
], userControllers.usuariosGet)

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
], userControllers.usuariosPut)

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