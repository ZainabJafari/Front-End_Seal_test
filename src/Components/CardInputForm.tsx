import React, { useState } from 'react';

type CardInput = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

type CardInputFormProps = {
  onCardSubmit: (cardInput: CardInput) => void;
};

const CardInputForm: React.FC<CardInputFormProps> = ({ onCardSubmit }) => {
  const [cardInput, setCardInput] = useState<CardInput>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleCardSubmit = () => {
    onCardSubmit(cardInput);

    // Reset the input fields
    setCardInput({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });
  };

  return (
    <div className='card-input'>
      <h2>please enter your card information</h2>
      <div>
      <input
        type="text"
        placeholder="Card Number"
        value={cardInput.cardNumber}
        onChange={(e) => setCardInput({ ...cardInput, cardNumber: e.target.value })}
      />
      </div>

      <div>
      <input
        type="text"
        placeholder="Expiration date"
        value={cardInput.expiryDate}
        onChange={(e) => setCardInput({ ...cardInput, expiryDate: e.target.value })}
      />
      </div>
      <div>
      <input
        type="text"
        placeholder="CVV"
        value={cardInput.cvv}
        onChange={(e) => setCardInput({ ...cardInput, cvv: e.target.value })}
      />
      </div>
      <div>
      <button onClick={handleCardSubmit}>Add card</button>
      </div>
    </div>
  );
};

export default CardInputForm;
