import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Header'
import Hero from './Hero';
import Product from './Product';
import About from './About';
import Contact from './Contact';
import Help from './Help';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   {/* <Hero/> */}
   
   <Routes>
      <Route path="/" element={< Hero />} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Help" element={<Help/>} />
      
    </Routes>
   </>
  )
}

export default App
