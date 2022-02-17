import React from 'react';
import './App.css'
import Slideshow from "./common/header/slideshow.js"
import Footer from "./common/footer/footer"
import Card from "./components/cards/card"

function App() {
  return (
    <div className="App">
      <div className="container">
         <Slideshow />
      </div>
      <div className='row'>
        <div className='left-text'>
          <h4> Popular </h4>
        </div>
        <div className='col-md-4'>
          <Card />
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
