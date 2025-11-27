import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import ProductShowcase from './sections/ProductShowcase';
import Plans from './sections/Plans';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProductShowcase />
        <Plans />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
