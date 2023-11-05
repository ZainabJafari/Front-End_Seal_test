const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    cardNumber: {type: String, required: true},
    expiryDate: {type: String, required: true},
    cvv: {type: Number, required: true},
})

const CardInfo = mongoose.model('User', cardSchema)

module.exports = CardInfo;