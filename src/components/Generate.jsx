import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';

const Generate = () => {
  const [value, setValue] = useState('');

  return (
    <div className='space-y-4'>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Enter text to generate QR code'
        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />

      {value && (
        <div className='flex justify-center p-4 bg-gray-50 rounded-lg'>
          <QRCodeSVG value={value} size={200} />
        </div>
      )}
    </div>
  );
};

export default Generate;
