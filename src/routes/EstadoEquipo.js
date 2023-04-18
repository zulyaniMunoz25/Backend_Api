const { Router } = require('express')
const {
    createEstadoEquipo,
    getEstadoEquipo,
    getEstadoEquipoByID,
    updateEstadoEquipo,
    deleteEstadoEquipo,
 } = require('../controllers/EstadoEquipo')

const router = Router()

router.post('/', createEstadoEquipo)
router.get('/', getEstadoEquipo)
router.get('/:id', getEstadoEquipoByID)
router.put('/:id',updateEstadoEquipo)
router.delete('/:id', deleteEstadoEquipo)

module.exports = router