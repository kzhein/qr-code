import { Download } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import { useRef, useState } from 'react';

const Generate = () => {
  const [value, setValue] = useState('');
  const qrRef = useRef(null);

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
        <>
          <div className='flex justify-center p-4'>
            <QRCodeCanvas value={value} size={200} ref={qrRef} />
          </div>
          <button
            onClick={() => {
              const base64image = qrRef.current.toDataURL('image/png', 1.0);

              // create anchor tag and add it to the DOM
              const fakeLink = document.createElement('a');
              fakeLink.style = 'display:none;';
              fakeLink.download = value;
              fakeLink.href = base64image;
              document.body.appendChild(fakeLink);

              // click and remove anchor tag
              fakeLink.click();
              document.body.removeChild(fakeLink);
              fakeLink.remove();
            }}
            className='w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200'
          >
            <Download className='w-5 h-5 mr-2' />
            Download QR Code
          </button>
        </>
      )}
    </div>
  );
};

export default Generate;
