import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import About from './components/About';
import Leadership from './components/Leadership';
import TechSpecs from './components/TechSpecs';
import Achievements from './components/Achievements';
import Sponsorship from './components/Sponsorship';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <About />
        <TechSpecs />
        <Achievements />
        <Leadership />
        <Sponsorship />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
