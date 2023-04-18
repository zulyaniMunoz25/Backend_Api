const { Router } = require('express')
const {
    createTipoEquipo,
    getTipoEquipo,
    getTipoEquipoByID,
    updateTipoEquipo,
    deleteTipoEquipo,
 } = require('../controllers/TipoEquipo')

const router = Router()

router.post('/', createTipoEquipo)
router.get('/', getTipoEquipo)
router.get('/:id', getTipoEquipoByID)
router.put('/:id', updateTipoEquipo)
router.delete('/:id', deleteTipoEquipo)

module.exports = router