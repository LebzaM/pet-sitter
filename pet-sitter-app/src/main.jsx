import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '@radix-ui/themes/styles.css';
import './theme-config.css';
import { Container, Theme } from '@radix-ui/themes'
import Navbar from './Navbar.jsx';
import './index.css'
import "leaflet/dist/leaflet.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme accentColor="violet" appearance="light">
    <App />
    </Theme>
  </React.StrictMode>,
)
