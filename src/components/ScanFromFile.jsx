import { BrowserQRCodeReader } from '@zxing/browser';
import { useState } from 'react';

const codeReader = new BrowserQRCodeReader();

const ScanFromFile = () => {
  const [value, setValue] = useState(null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Select Image</h1>
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
      <input
        type='file'
        accept='image/*'
        name='image'
        onChange={async e => {
          const file = e.target.files[0];

          if (!file) {
            setValue(null);
            return;
          }

          const imageURL = URL.createObjectURL(file);

          try {
            const { text } = await codeReader.decodeFromImageUrl(imageURL);
            setValue(text);
          } catch (error) {
            // if(error.name === 'NotFoundException2') {}
            setValue(null);
          } finally {
            URL.revokeObjectURL(imageURL);
          }
        }}
      />
    </div>
  );
};

export default ScanFromFile;
