import { BrowserQRCodeReader } from '@zxing/browser';
import { Upload, X } from 'lucide-react';
import { useRef, useState } from 'react';

const codeReader = new BrowserQRCodeReader();

const ScanFromFile = () => {
  const fileInputRef = useRef(null);
  const [scannedResult, setScannedResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className='space-y-6'>
      <input
        type='file'
        accept='image/*'
        onChange={async e => {
          setIsScanning(true);

          const file = e.target.files[0];

          if (!file) {
            setSelectedFile(null);
            setScannedResult(null);
            return;
          }

          setSelectedFile(file);

          const imageURL = URL.createObjectURL(file);

          try {
            const { text } = await codeReader.decodeFromImageUrl(imageURL);
            setScannedResult(text);
          } catch (error) {
          } finally {
            URL.revokeObjectURL(imageURL);
            setIsScanning(false);
          }
        }}
        ref={fileInputRef}
        className='hidden'
      />

      {!selectedFile ? (
        <div
          onClick={() => {
            fileInputRef.current.click();
          }}
          className='w-full h-40 border-3 border-dashed border-green-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-green-500 hover:bg-green-50/50 transition-all duration-300 transform hover:scale-105'
        >
          <Upload className='w-12 h-12 text-green-400 mb-4' />
          <p className='text-lg text-green-600 font-medium'>
            Click to upload or drag and drop
          </p>
        </div>
      ) : (
        <div className='w-full p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-between shadow-inner'>
          <div className='flex items-center'>
            <Upload className='w-6 h-6 text-green-500 mr-3' />
            <span className='text-lg text-green-700 font-medium truncate max-w-[200px]'>
              {selectedFile.name}
            </span>
          </div>
          <button
            onClick={() => {
              setSelectedFile(null);
              setScannedResult(null);
              fileInputRef.current.value = '';
            }}
            className='p-2 hover:bg-green-200/50 rounded-full transition-colors duration-300'
          >
            <X className='w-5 h-5 text-green-500' />
          </button>
        </div>
      )}

      {!isScanning && selectedFile && !scannedResult && (
        <div className='mt-6 p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl shadow-inner text-red-800 font-medium'>
          <p>No QR Code detected</p>
        </div>
      )}

      {scannedResult && (
        <div className='mt-6 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl shadow-inner text-green-800 font-medium'>
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

export default ScanFromFile;
