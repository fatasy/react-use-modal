import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalsProvider } from 'react-use-modal';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </StrictMode>
);
