import React from 'react';
import axios from 'axios';
import CardInputForm from './CardInputForm';

type CardInput = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

type CardHandlerProps = {
  onCardAdded: () => void;
};

const CardHandler: React.FC<CardHandlerProps> = ({ onCardAdded }) => {
  const handleCardSubmit = (cardInput: CardInput) => {
    axios.post('http://localhost:8080/api/card/add', cardInput)
      .then(() => {
        console.log(cardInput);
        onCardAdded();
      })
      .catch((error) => {
        console.error('error adding card:', error);
      });
  };

  return (
    <div>
      <CardInputForm onCardSubmit={handleCardSubmit} />
    </div>
  );
};

export default CardHandler;

