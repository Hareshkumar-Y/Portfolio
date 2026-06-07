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
import ErrorBoundary from './components/ErrorBoundary';
import IntroModal from './components/IntroModal';
import News from './components/News';

function App() {
  return (
    <div className="app">
      <Background />
      <ErrorBoundary>
        <IntroModal />
      </ErrorBoundary>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <About />
        <ErrorBoundary>
          <TechSpecs />
        </ErrorBoundary>
        <ErrorBoundary>
          <Achievements />
        </ErrorBoundary>
        <ErrorBoundary>
          <News />
        </ErrorBoundary>
        <ErrorBoundary>
          <Leadership />
        </ErrorBoundary>
        <ErrorBoundary>
          <Sponsorship />
        </ErrorBoundary>
        <ErrorBoundary>
          <Gallery />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
