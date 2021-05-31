import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import PensionProvider from './PensionProvider';


ReactDOM.render(
  <React.StrictMode>
  <PensionProvider>
    <App />
  </PensionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
