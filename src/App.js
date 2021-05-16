import React from 'react';
import About from './Components/About';

import Contact from './Components/Contact';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Specializations from './Components/Specializations';

export default function App() {
  return (
    <div>
      <Header />
      <Specializations />
      <About />
      <Projects />
      <Counter />

      <Contact />
      <Footer />
    </div>
  );
}
