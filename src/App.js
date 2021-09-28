import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';



function App() {

  
  
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <About />
      <Products />
      <Footer />
  
    </div>
  );
}

export default App;
