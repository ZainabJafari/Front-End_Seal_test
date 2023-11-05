const CardInfo = require('../schema/cardSchema');

exports.createNewCard = (req, res) =>{

    const {cardNumber, expiryDate, cvv} = req.body;
 
    if(!cardNumber || !expiryDate || !cvv){
        res.status(400).json({
            message: 'You need to enter all the fileds'
        })
        return
    }


    CardInfo.create({cardNumber, expiryDate, cvv })
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err =>{
        res.status(500).json({
         message: 'somthing went wrong when creating the card',
         err: err.message
        })
        return
    })
}

exports.getCard = async (req, res) =>{

    try {
        const card = await CardInfo.find()
        res.status(200).json(card)
        
    } catch (err) {
        res.status(500).json({message: 'Something went wrong when getting the products'})
    }
}

exports.uppdateCard = async (req, res) =>{
    const cardinfo = await CardInfo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    if(!cardinfo){
      return res.status(404).json({message: 'Could not find the card'})
    }

    res.status(200).json(cardinfo)

}