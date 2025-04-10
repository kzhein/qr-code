import { Camera, Image, QrCode } from 'lucide-react';
import { useState } from 'react';
import Generate from './components/Generate';
import ScanFromCamera from './components/ScanFromCamera';
import ScanFromFile from './components/ScanFromFile';

function App() {
  const [activeTab, setActiveTab] = useState('generate');

  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
        <div className='p-6'>
          <div className='flex justify-center items-center space-x-4 mb-6 flex-wrap'>
            <button
              onClick={() => setActiveTab('generate')}
              className={`flex items-center px-4 py-2 rounded-lg my-1 ${
                activeTab === 'generate'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              <QrCode className='w-5 h-5 mr-2' />
              Generate
            </button>
            <button
              onClick={() => {
                setActiveTab('camera');
              }}
              className={`flex items-center px-4 py-2 rounded-lg my-1 ${
                activeTab === 'camera'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              <Camera className='w-5 h-5 mr-2' />
              Camera
            </button>
            <button
              onClick={() => {
                setActiveTab('file');
              }}
              className={`flex items-center px-4 py-2 rounded-lg my-1 ${
                activeTab === 'file'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              <Image className='w-5 h-5 mr-2' />
              File
            </button>
          </div>

          {activeTab === 'generate' && <Generate />}

          {activeTab === 'camera' && <ScanFromCamera />}

          {activeTab === 'file' && <ScanFromFile />}
        </div>
      </div>
    </div>
  );
}

export default App;
