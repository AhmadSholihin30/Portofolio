import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Component/Header.jsx'
import Navigation from './Component/navigation.jsx'
import Banner from './Component/Banner.jsx'
import Profile from './Component/profile.jsx'
import Portofolio from './Component/portofolio.jsx'
import SetMenu from './Component/SetMenu.jsx'
import FooterLock from './Component/FooterLock.jsx'
import Contact from './Component/contact.jsx'
import SlideFourth from './Component/Hobby.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <SetMenu/>
    <Navigation/>
    <Banner/>
    <SlideFourth />
    <Profile/>
    <Portofolio/>
    <Contact/>
    <FooterLock/>
  </StrictMode>
)
