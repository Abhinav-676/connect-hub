import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Slider from './slider.jsx'
import './index.css'
import Marquee from './marquees.jsx'
import { Desc } from './Desc.jsx'
import VideoCollage from './vCollage.jsx'
import Programme from './programme.jsx'
import CardGrid from './programme.jsx'
import Footer from './footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Slider/>
    <Marquee/>
    <Desc/>
    <VideoCollage/>
    <CardGrid/>
    <Footer/>
  </React.StrictMode>,
)
