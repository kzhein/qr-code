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
    <div className='space-y-4'>
      <div id='reader' className='w-full'>
        <QrReader delay={300} onError={handleError} onScan={handleScan} />
      </div>
      {scannedResult && (
        <div className='mt-4 p-4 bg-green-50 text-green-700 rounded-lg'>
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
