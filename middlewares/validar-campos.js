const { validationResult } = require('express-validator')


const validarCampos = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            msg: 'Hay errores con tus datos',
            ...errors
        })
    }

    next()
}

module.exports = {
    validarCampos,
}