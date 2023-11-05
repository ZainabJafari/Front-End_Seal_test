const InvoiceInfo = require('../schema/invoice');
const fs = require('fs');
const path = require('path');

exports.uploadInvoice = (req, res) => {
  const { fileName } = req.body;

  if (!fileName) {
    res.status(400).json({ message: 'fil the file' });
    return;
  }

  InvoiceInfo.create({ fileName })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'somthing went wrong ',
        err: err.message,
      });
    });
};

exports.downloadInvoice = (req, res) => {
  const { fileName } = req.params;
  const file = `uploads/${fileName}`;

  const fileExists = fs.existsSync(file);

  if (fileExists) {
    res.download(file, (err) => {
      if (err) {
        res.status(500).send('Failed to download the file');
      }
    });
  } else {
    res.status(404).send('File not found');
  }
};
