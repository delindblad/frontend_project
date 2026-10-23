import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Load Bootstrap styles before the application's custom styles.
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);