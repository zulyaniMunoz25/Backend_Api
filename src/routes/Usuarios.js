const { Router } = require('express')
const {
    createUsuario,
    getUsuario,
    getUsuarioByID,
    updateUsuario,
    deleteUsuario,
 } = require('../controllers/Usuario')

const router = Router()

router.post('/', createUsuario )
router.get('/', getUsuario)
router.get('/:id', getUsuarioByID)
router.put('/:id', updateUsuario)
router.delete('/:id', deleteUsuario)

module.exports = router
