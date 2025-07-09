import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'prism-themes/themes/prism-vsc-dark-plus.css'; // VSCode Dark+ theme

createRoot(document.getElementById("root")!).render(<App />);
