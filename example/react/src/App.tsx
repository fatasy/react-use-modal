import { useModals } from 'react-use-modal';
import './App.css';
import reactLogo from './assets/react.svg';
import { CustomModal } from './components/custom-modal';
import viteLogo from '/vite.svg';

function App() {
  const modals = useModals();

  const handleOpenModalButtonClick = () => {
    modals.open(CustomModal);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOpenModalButtonClick}>Open Modal</button>
      </div>
    </>
  );
}

export default App;
