import React from 'react';
import './App.css';
import 'animate.css';
import Header from './components/header';
import Jumbo from './components/jombo'
import Section from './components/Section'
import Service from './components/Service';
import Video from './components/Video';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
     <Header/>
     <Jumbo/>
     <Section/>
     <Service/>
     <Video/>
     <Footer/>
    </div>
  );
}

export default App;
