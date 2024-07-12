import App from './App.tsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import * as ReactDOM from "react-dom/client";
import * as React from "react";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)
