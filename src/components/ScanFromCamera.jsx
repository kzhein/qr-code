import { useState } from 'react';
import QrReader from 'react-qr-reader';

const ScanFromCamera = () => {
  const [scannedResult, setScannedResult] = useState(null);

  const handleError = error => {
    console.log(error);
  };

  const handleScan = data => {
    if (data) {
      console.log(data);
      setScannedResult(data);
    }
  };

  return (
    <div className='space-y-6'>
      <div id='reader' className='rounded-xl overflow-hidden shadow-lg'>
        <QrReader delay={300} onError={handleError} onScan={handleScan} />
      </div>

      {scannedResult && (
        <div className='mt-6 p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl text-blue-800 font-medium'>
          <p>Scanned Result:</p>
          <p
            className='break-all'
            style={{
              // select text with one tap
              WebkitUserSelect: 'all',
              MozUserSelect: 'all',
              MsUserSelect: 'all',
              UserSelect: 'all',
            }}
          >
            {scannedResult}
          </p>
        </div>
      )}
    </div>
  );
};

export default ScanFromCamera;
