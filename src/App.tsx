import React from 'react';
import './App.css';
import Slideshow from './Slideshow';

function App() {
  const images = [
    '/images/coffee.jpg',
    '/images/coins.jpg',
    '/images/posing.jpg',
    '/images/raspberries.jpg',
  ];

  return (
    <div className="App">
      <h1>Simple Slideshow</h1>
      <Slideshow images={images} />
    </div>
  );
}

export default App;
