import { useState } from 'react';
import QRCode from 'qrcode.react';

const Generate = () => {
  const [value, setValue] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Create QR code</h1>
      <input
        type='text'
        placeholder='Enter your data'
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px' }}
      />
      <QRCode value={value} size={200} />
    </div>
  );
};

export default Generate;
