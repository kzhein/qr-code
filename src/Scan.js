import { useState } from 'react';
import QrReader from 'react-qr-reader';

const Scan = () => {
  const [scan, setScan] = useState(false);
  const [value, setValue] = useState(null);

  const handleError = error => {
    console.log(error);
  };

  const handleScan = data => {
    if (data) {
      console.log(data);
      setValue(data);
      setScan(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Read QR code</h1>
      {value && (
        <p>
          Scanned value is:{' '}
          <span
            style={{
              fontWeight: 'bold',

              // select text with one tap
              WebkitUserSelect: 'all',
              MozUserSelect: 'all',
              MsUserSelect: 'all',
              UserSelect: 'all',
            }}
          >
            {value}
          </span>
        </p>
      )}
      {scan ? (
        <>
          <button onClick={() => setScan(false)}>Stop Scan</button>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%', marginTop: '5px' }}
          />
        </>
      ) : (
        <button
          onClick={() => {
            setValue(null);
            setScan(true);
          }}
        >
          Start Scan
        </button>
      )}
    </div>
  );
};

export default Scan;
