import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Icon } from '@iconify/react'
import icon from './Icons/icon.jsx'
import plane from './Icons/icon.jsx'
import ServicesCard from './Components/ServicesCard.jsx'
import ServicesOffered from './Components/ServicesOffered.jsx'
import TestimonialShow from './Components/TestimonialShow.jsx'
import Contact from './Components/Contact.jsx'
import ServicesVal from './Components/ServicesVal.jsx'
import {NextUIProvider} from '@nextui-org/react'
import Blog from './Components/Blog.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <NextUIProvider>
      <App />
      <ServicesVal/>

      <ServicesOffered/>
      <Contact/>
      {/* <Blog/> */}
    </NextUIProvider>
  

  </React.StrictMode>,
)
