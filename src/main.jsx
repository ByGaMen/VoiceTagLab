import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ScreenContexProvider from './Contex/ScreenContex.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/VoiceTagLab">
        <React.StrictMode>
            <ScreenContexProvider>
                <App />
            </ScreenContexProvider>
        </React.StrictMode>
    </BrowserRouter>
)
