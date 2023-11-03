//  External Modules  //
import React from 'react';
import ReactDOM from 'react-dom/client';

//  Internal Modules  //
import App from 'App';

//  Styles  //
import 'styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
