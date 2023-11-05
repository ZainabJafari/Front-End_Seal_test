import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function UploadInvoices() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('invoice', file);

// Send the invoice to the server using the Fetch API
      fetch('http://localhost:8080/api/invoice/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Fakturan är uppladdad:', data);
          // Here you can handle the response from the server if needed
        })
        .catch((error) => {
          console.error('Något gick fel vid uppladdning:', error);
        });
    }
  };

  return (
    <div>
      <TextField
        type="file"
        onChange={handleFileChange}
        fullWidth
        InputLabelProps={{ shrink: true }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!file}
      >
      </Button>
    </div>
  );
}

export default UploadInvoices;
