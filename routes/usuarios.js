const { Router } = require('express')
const { check } = require('express-validator')
const { usuariosGet, usuariosPut, usuariosDelete, usuariosPost } = require('../controllers/usuarios')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

router.get('/', usuariosGet)

router.put('/:id', usuariosPut)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').exists({ checkNull: true, checkFalsy: true}),
    check('nombre', 'El nombre No puede estar vacio').trim().notEmpty(),
    check('password', 'El password debe ser mayor a 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE', 'CLIENT_ROLE']),
    validarCampos
], usuariosPost)

router.delete('/', usuariosDelete)

module.exports = router