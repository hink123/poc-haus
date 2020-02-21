const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/products');

router.get('/', productCtrl.getAll);
router.post('/', productCtrl.createOne);
router.get('/:id', productCtrl.getOne);
router.put('/:id', productCtrl.updateOne);
router.delete('/:id', productCtrl.removeOne);

module.exports = router;