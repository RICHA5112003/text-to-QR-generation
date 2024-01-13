// QRCodeGenerator.jsx

import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css'; // Import the CSS file for styling

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>
      <div>
        <label htmlFor="text">Enter text:</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text to generate QR code"
        />
      </div>
      <div className="qr-code-container">
        {text && <QRCode value={text} size={200} />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
