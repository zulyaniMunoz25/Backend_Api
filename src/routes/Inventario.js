const { Router } = require('express')

const {
    createInventario,
    getInventario,
    getInventarioByID,
    updateInventario,
    deleteInvetario,
    getInventarios,
    deleteInventario,

} = require('../controllers/Inventario')

const router = Router()

router.get('/', getInventario);
router.get('/:id', getInventarioByID);
router.post('/', createInventario);
router.put('/:id', updateInventario);
router.delete('/:id',deleteInventario);

module.exports = router