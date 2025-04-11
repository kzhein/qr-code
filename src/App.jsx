import { Camera, Image, QrCode } from 'lucide-react';
import { useState } from 'react';
import Generate from './components/Generate';
import ScanFromCamera from './components/ScanFromCamera';
import ScanFromFile from './components/ScanFromFile';

function App() {
  const [activeTab, setActiveTab] = useState('generate');

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20'>
        <div className='p-8'>
          <h1 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            QR Code Magic ✨
          </h1>
          <div className='flex justify-center items-center space-x-4 mb-6 flex-wrap'>
            <button
              onClick={() => setActiveTab('generate')}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 my-1 ${
                activeTab === 'generate'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <QrCode className='w-5 h-5 mr-2' />
              Generate
            </button>
            <button
              onClick={() => {
                setActiveTab('camera');
              }}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 my-1 ${
                activeTab === 'camera'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Camera className='w-5 h-5 mr-2' />
              Camera
            </button>
            <button
              onClick={() => {
                setActiveTab('file');
              }}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 my-1 ${
                activeTab === 'file'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
