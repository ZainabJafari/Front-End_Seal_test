import axios from 'axios';

const ReadCardData = async () => {
  try {
    const response = await axios.get('/mockdata/cards.json');
    return response.data;
  } catch (error) {
    console.error('Fel vid inläsning av kortinformation:', error);
    return [];
  }
};

export default ReadCardData