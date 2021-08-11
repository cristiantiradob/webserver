const { Router } = require('express');
const router = Router();
const userControllers = require('../controllers/usuarios')

router.get('/', userControllers.usuariosGet)
router.put('/', userControllers.usuariosPut)
router.post('/', userControllers.usuariosPost)
router.delete('/', userControllers.usuariosDelete)

module.exports = router;