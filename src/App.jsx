import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import './App.css';
import MobileNav from './components/MobileNav/MobileNav';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <main className='App'>
      {isMobile ? <MobileNav /> : <Navbar />}
      <Homepage />
    </main>
  )
}

export default App

// Make sections default 100vh