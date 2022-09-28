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
import ForgotPassword from './components/ForgotPassword';
import PasswordCode from './components/PasswordCode.js';
import SettingPasswrod from './components/SettingPassword';
import LogOtp from './components/LogOtp';
import Deposit from './components/deposit';
import ConfirmDeposit from './components/confirmDeposit';
import Withdraw from './components/withdraw';
import ConfirmWithdraw from './components/confirmWithdraw';
import WithdrawSuccess from './components/withdrawSuccess';
import SendKyc from './components/kyc';
import ConfirmKyc from './components/confirmKyc';
import KycSuccess from './components/kycSuccess';


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
      <Route path='/forgot_password' element={<ForgotPassword /> } />
      <Route path='/password_otp' element={<PasswordCode /> } />
      <Route path='/setting_password' element={<SettingPasswrod /> } />
      <Route path='/login_otp' element={<LogOtp /> } />
      
      <Route path='/deposit' element={<Deposit />} />
      <Route path='confirm-deposit' element={<ConfirmDeposit />} />

      <Route path='/withdraw' element={<Withdraw />} />
      <Route path='/confirm-withdraw' element={<ConfirmWithdraw />} />
      <Route path='/withdraw-success' element={<WithdrawSuccess />} />
      <Route path='/kyc' element={<SendKyc />} />
      <Route path='/confirm-kyc' element={<ConfirmKyc />} />
      <Route path='/kyc-success' element={<KycSuccess />} />
    </Routes>
  )
}

export default App;
