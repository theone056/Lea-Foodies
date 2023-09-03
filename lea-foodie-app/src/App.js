import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.js'
import Header from './Components/Header/Header.js';
import Menu from './Components/Menu/Menu.js';
import About from './Components/About/About.js';
import Gallery from './Components/Gallery/Gallery.js';

function App() {
  return (
    <div>
       <Header/>
       <Home/>
       <About/>
       <Menu/>
       <Gallery/>
       {/*
       <Contact/> */}
    </div>
  );
}

export default App;
