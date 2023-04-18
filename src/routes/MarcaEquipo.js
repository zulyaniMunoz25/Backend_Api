const { Router } = require('express')
const {
    createMarcaEquipo,
    getMarcaEqupipo,
    getMarcaEquipoByID,
    updateMarcaEquipo,
    deleteMarcaEquipo,
    getMarcaEquipo,
    
} = require('../controllers/MarcaEquipo')

const router = Router()

router.post('/', createMarcaEquipo)
router.get('/', getMarcaEquipo)
router.get('/:id', getMarcaEquipoByID)
router.put('/:id', updateMarcaEquipo)
router.delete('/:id', deleteMarcaEquipo)

module.exports = router