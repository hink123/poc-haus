const express = require('express');
const router = express.Router();
const businessCtrl = require('../controllers/businesses');

router.get('/', businessCtrl.getAll);
router.get('/:id', businessCtrl.getOne);
router.post('/', businessCtrl.createOne);
router.put('/:id', businessCtrl.updateOne);
router.delete('/:id', businessCtrl.removeOne);

module.exports = router;