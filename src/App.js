// import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Transaction from './components/Transactions';
import SendMoney from './components/SendMoney';
import Help from './components/Help';
import Profile from './components/Profile';
import ConfirmMoney from './components/confirmMoney';
import Success from './components/success';
import Otp from './components/otp';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/about' element= {<About />} />
      <Route path='/contact' element= {<Contact />} />
      <Route path='/register' element= {<Register/>} />
      <Route path='/login' element= {<Login/>} />
      <Route path='/dashboard' element= {<Dashboard/>} />
      <Route path='/transactions' element={<Transaction /> } />
      <Route path='/send-money' element={<SendMoney /> } />
      <Route path='/confirm-money' element={<ConfirmMoney /> } />
      <Route path='/success' element={<Success />} />
      <Route path='/help' element={<Help /> } />
      <Route path='/my-profile' element={<Profile /> } />
      <Route path='/otp' element={<Otp />} />

    </Routes>
  )
}

export default App;
