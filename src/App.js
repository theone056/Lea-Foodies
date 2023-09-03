import './App.css';
import Home from './Components/Home/Home.js';
import Header from './Components/Header/Header.js';
import Menu from './Components/Menu/Menu.js';
import About from './Components/About/About.js';
import Gallery from './Components/Gallery/Gallery.js';
import Contact from './Components/Contact/Contact.js';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import React,{useEffect} from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
       <Header/>
       <Home/>
       <About/>
       <Menu/>
       <Gallery/>
       <Contact/>
    </div>
  );
}

export default App;
