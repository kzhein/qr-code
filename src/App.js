import Generate from './Generate';
import Scan from './Scan';

export default function App() {
  return (
    <>
      <div
        style={{
          maxWidth: '300px',
          margin: '0 auto 0 auto',
        }}
      >
        <Generate />
        <hr />
        <Scan />
      </div>
    </>
  );
}
