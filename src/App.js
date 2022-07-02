// import logo from './logo.svg';
import React, { Component } from 'react'
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
import Security from './components/Security';
import PaymentMethod from './components/PaymentMethods';
import Notifications from './components/Notifications';

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
      <Route path='/help' element={<Help /> } />
      <Route path='/my-profile' element={<Profile /> } />
      <Route path='/security' element={<Security /> } />
      <Route path='/payment-methods' element={<PaymentMethod /> } />
      <Route path='/notifications' element={<Notifications /> } />

    </Routes>
  )
}

export default App;
