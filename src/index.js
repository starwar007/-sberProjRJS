// import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/source-sans-pro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
         
);

