import React from 'react';
import Boxes from './Components/Boxes';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Paras from './Components/Paras';
import Slider from './Components/Slider';

function App() {
  return (
    <div>

      <Header />
      <Slider />
      <Paras />
      <div style={{clear:'both'}} ></div>
      <Boxes />
      <div style={{clear:'both'}} ></div>
      <Footer />




    </div>
  );
}

export default App;