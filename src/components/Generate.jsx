import { Download } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import { useRef, useState } from 'react';

const Generate = () => {
  const [value, setValue] = useState('');
  const qrRef = useRef(null);

  return (
    <div className='space-y-6'>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Enter text to generate QR code'
        className='w-full px-6 py-4 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/50 backdrop-blur-sm'
      />

      {value && (
        <div className='space-y-6'>
          <div className='flex justify-center p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl'>
            <div className='transform hover:scale-105 transition-transform duration-300'>
              <QRCodeCanvas value={value} size={200} ref={qrRef} />
            </div>
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
            className='w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg'
          >
            <Download className='w-5 h-5 mr-2' />
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default Generate;
