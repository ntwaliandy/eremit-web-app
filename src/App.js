// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/about' element= {<About />} />
      <Route path='/contact' element= {<Contact />} />
      <Route path='/register' element= {<Register/>} />
      <Route path='/login' element= {<Login/>} />
      <Route path='/dashboard' element= {<Dashboard/>} />

    </Routes>
  );
}

export default App;
