import React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios';

import { Button, List, ListItem } from '@mui/material';
import UploadInvoices from './UploadInvoices';



function DownloadInvoices() {

    
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/invoice');
              setData(response.data);
        } catch (error) {
          console.error('Fel vid hämtning av data:', error);
        }
      };
          fetchData();
    }, []);


  const handleDownload = (fileName: string) => {
    //  Create a link to download the invoice
    const link = document.createElement('a');
    link.href = `/api/download/${fileName}`; // Anpassa sökvägen till din nedladdningsruta på servern
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
    <List>
      {data !== null ? (
        data.map(invoice => (
          <ListItem key={invoice.id}>
            {invoice.name}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDownload(invoice.fileName)}
            >
              Ladda ner
            </Button>
          </ListItem>
        ))
      ) : (
        <p>Laddar data...</p>
      )}
    </List>
  </div>
  );
}

export default DownloadInvoices;
