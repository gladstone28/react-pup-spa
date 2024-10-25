import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Address from './components/Address';
import Hours from './components/Hours';
import CallUs from './components/CallUs';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="grid">
      <Header />
      <Banner />
      <About />
      <Address />
      <Hours />
      <CallUs />
      <Testimonial quote="PupSpa is a first class doggie grooming operation. My pug VanDyke always comes back looking so fresh. Thanks guys!" author="Dan" />
      <Testimonial quote="Lua (my shiba inu) and I are HUGE fans of PupSpa! Ryan and his crew are always so generous with their time." author="KC" />
      <Footer />
    </div>
  );
}

export default App;
