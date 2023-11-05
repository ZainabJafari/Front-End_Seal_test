const router = require('express').Router()
const invoiceController = require('../models/invoiceModel');

router.post('/upload', invoiceController.uploadInvoice);
router.get('/', invoiceController.uploadInvoice);
router.get('/download/:fileName', invoiceController.downloadInvoice);


module.exports = router;
