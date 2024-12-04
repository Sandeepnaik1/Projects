import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReadyToDive from './components/ReadyToDive'; // Comes after Hero
import Features from './components/Features'; // Features now includes How It Works content
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ReadyToDive />
      <VideoSection />
      <Features /> {/* Includes the How It Works content */}
      <Footer />
    </div>
  );
}

export default App;
