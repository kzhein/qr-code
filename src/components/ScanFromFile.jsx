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
    <div className='space-y-4'>
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
            fileInputRef.current?.click();
          }}
          className='w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors duration-200'
        >
          <Upload className='w-8 h-8 text-gray-400 mb-2' />
          <p className='text-sm text-gray-500'>
            Click to upload or drag and drop
          </p>
        </div>
      ) : (
        <div className='w-full p-4 bg-blue-50 rounded-lg flex items-center justify-between'>
          <div className='flex items-center'>
            <Upload className='w-5 h-5 text-blue-500 mr-2' />
            <span className='text-sm text-blue-700 truncate max-w-[200px]'>
              {selectedFile.name}
            </span>
          </div>
          <button
            onClick={() => {
              setSelectedFile(null);
              setScannedResult(null);
              fileInputRef.current.value = '';
            }}
            className='p-1 hover:bg-blue-100 rounded-full transition-colors duration-200'
          >
            <X className='w-4 h-4 text-blue-500' />
          </button>
        </div>
      )}

      {!isScanning && selectedFile && !scannedResult && (
        <div className='mt-4 p-4 bg-red-50 text-red-700 rounded-lg'>
          <p>No QR Code detected</p>
        </div>
      )}

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

export default ScanFromFile;
