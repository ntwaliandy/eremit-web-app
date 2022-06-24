import './App.css';
import Transaction from './components/Transactions';
import { Routes, Route } from "react-router-dom";
import SendMoney from './components/SendMoney';
import Help from './components/Help';
import Profile from './components/Profile';
import Security from './components/Security';
import PaymentMethod from './components/PaymentMethods';
import Notifications from './components/Notifications';
function App() {
  return (
    <Routes>
      <Route path='/transactions' element={<Transaction /> } />
      <Route path='/send-money' element={<SendMoney /> } />
      <Route path='/help' element={<Help /> } />
      <Route path='/my-profile' element={<Profile /> } />
      <Route path='/security' element={<Security /> } />
      <Route path='/payment-methods' element={<PaymentMethod /> } />
      <Route path='/notifications' element={<Notifications /> } />
    </Routes>
  );
}

export default App;
