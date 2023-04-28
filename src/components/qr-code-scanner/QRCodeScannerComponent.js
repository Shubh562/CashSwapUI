import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScannerComponent = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
          <p className="mt-3">Scanned Result: {result}</p>
        </div>
      </div>
    </div>
  );
}

export default QRScannerComponent;
