const router = require('express').Router()
const productModel = require('../models/cardModel')


router.post('/add',  productModel.createNewCard)
router.get('/',  productModel.getCard)
router.put('/:id',  productModel.uppdateCard)

module.exports = router;
