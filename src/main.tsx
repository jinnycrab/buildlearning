
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force a fresh render to ensure sync
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
