import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.js'
import Header from './Components/Header/Header.js';
import About from './Components/About/About.js';
function App() {
  return (
    <div>
       <Header/>
       <Home/>
       <About/>
       {/* 
       <Menu/>
       <Gallery/>
       <Contact/> */}
    </div>
  );
}

export default App;
