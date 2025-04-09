import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

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
      <QRCodeSVG value={value} size={200} />
    </div>
  );
};

export default Generate;
