import Generate from './components/Generate';
import ScanFromCamera from './components/ScanFromCamera';
import ScanFromFile from './components/ScanFromFile';

function App() {
  return (
    <div
      style={{
        maxWidth: '300px',
        margin: '0 auto 0 auto',
      }}
    >
      <Generate />
      <hr />
      <ScanFromCamera />
      <hr />
      <ScanFromFile />
    </div>
  );
}

export default App;
