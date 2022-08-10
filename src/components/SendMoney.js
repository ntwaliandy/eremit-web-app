import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-bootstrap";
import 'react-phone-number-input/style.css';

const SendMoney = () =>  {
  const [userCurrencies, setUserCurrincies] = useState([]);
  const [currency_code, setCurrencyCode] = useState("")
  const [username, setUsername] = useState("")
  const [amount, setAmount] = useState("")
  const [isLoading, SetLoading] = useState(false)
  let navigate = useNavigate()
  

  useEffect(() => {
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const token = "Bearer " + loadedData.token

    const bodyData = {
      "user_id": loadedData.user_id
    }
    const requiredDataOptions = {
      method: "POST",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
    }
    fetch("http://18.116.9.199:9000/user_wallet_details", requiredDataOptions)
    .then(results => results.json())
    .then((response) => {
      console.log(response)
      setUserCurrincies(response)
    })
  }, [])

  const handleOnSubmit = e => {
    SetLoading(true)
    e.preventDefault()
    console.log(username)
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const senderId = loadedData.user_id
    const bodData = {
      "sender_id": senderId,
      "currency_code": currency_code,
      "username": username,
      "amount": parseFloat(amount)
    }

    const requiredOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodData)
    }

    fetch("http://18.116.9.199:9000/verify_currency", requiredOptions)
    .then(results => results.json())
    .then((response) => {
      console.log(response)
      if (response.status === 100) {
        SetLoading(false)
        navigate("/confirm-money", { state: {
          "senderWalletId": response.message.sender_walletId,
          "receiverWalletId": response.message.receiver_walletId,
          "amount": amount,
          "username": username,
          "currency": currency_code
        }});
        
      } else if (response.status === 403) {
        SetLoading(false)
        toast(response.message)
      } else {
        SetLoading(false)
        toast("Invalid data types")

      }
    })

  }

    return (
            <div>
{/* <div id="preloader">
  <div data-loader="dual-ring"></div>
</div> */}
<div id="main-wrapper"> 
  
<header id="header">
    <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start"> 
          
          <div class="logo me-3"> <a class="d-flex" href="/eremit/#/dashboard" title="eremit - HTML Template"><img src="assets/images/logo2.png" alt="eremit" /></a> </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
          
          <nav class="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto">
                <li class="active"><a href="/eremit/#/dashboard">Dashboard</a></li>
                <li><a href="/eremit/#/send-money">Send</a></li>
                <li><a href="/eremit/#/deposit">Deposit/Withdraw</a></li>
                <li><a href="/eremit/#/help">Help</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="header-column justify-content-end"> 
          <nav class="login-signup navbar navbar-expand">
          <div class="col-auto d-flex align-items-center ms-auto">
                    <div class="dropdown"> <a class="text-muted btn-link" href="#" role="button" id="statements" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img class="rounded-circle" src="assets/images/profile-thumb-sm.jpg" alt="" /></a>
                      <div class="dropdown-menu dropdown-menu-end" aria-labelledby="statements"> <a class="dropdown-item" href="/eremit/#/my-profile">My Profile</a> <a class="dropdown-item" href="/eremit/#/login"onClick={() =>{ localStorage.removeItem('data') } }>Logout</a> </div>
                    </div>
                  </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <ToastContainer />
  <div id="content" class="py-4">
    <div class="container">
    <div class="row mt-4 mb-5">
        <div class="col-lg-11 mx-auto">
          <div class="row widget-steps">
            <div class="col-4 step active">
              <div class="step-name">Details</div>
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
              <a href="#" class="step-dot"></a> </div>
            <div class="col-4 step disabled">
              <div class="step-name">Confirm</div>
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
              <a href="#" class="step-dot"></a> </div>
            <div class="col-4 step disabled">
              <div class="step-name">Success</div>
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
              <a href="#" class="step-dot"></a> </div>
          </div>
        </div>
      </div>
      <h2 class="fw-400 text-center mt-3">Send Money</h2>
      <p class="lead text-center mb-4">Send your money anytime, anywhere in the world.</p>
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-6 mx-auto">
          <div class="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
            <h3 class="text-5 fw-400 mb-3 mb-sm-4">Personal Details</h3>
            <hr class="mx-n3 mx-sm-n5 mb-4" />
            <form id="form-send-money" onSubmit={handleOnSubmit}>
            <div class="mb-4 mb-sm-5">
                <label for="description" class="form-label">Receiver Username</label>
                <input type="text" value={username} class="form-control" onChange={e => setUsername(e.target.value)} rows="4" id="description" required placeholder="Tommy@256" />
              </div>
              <div class="mb-3">
                <label for="youSend" class="form-label">You Send</label>
                <div class="input-group">
                  <span class="input-group-text"></span>
                  <input type="text" class="form-control" data-bv-field="youSend" id="youSend" name="amount"  onChange={e => setAmount(e.target.value)} value={amount} placeholder="Enter amount" />
                  <span class="input-group-text p-0">
                    <select id="youSendCurrency" data-style="form-select bg-transparent border-0" data-container="body" name="currency_code" onChange={e => setCurrencyCode(e.target.value)} data-live-search="true" class="selectpicker form-control bg-transparent" required="">
                    <option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar" value="">currency</option>
                      { 
                        userCurrencies.map((cr) => (
                          <option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar"  value={cr.currency_code}>{cr.currency_code}</option>
                        )) 
                      }
                      
                      
                    </select>
                    </span>
                </div>
              </div>
              
              <p class="text-muted text-center">Receiver gets <span class="fw-500">{amount} {currency_code}</span></p>
              <hr />
              <p>Total Fees<span class="float-end">0 {currency_code}</span></p>
              <hr />
              <p class="text-4 fw-500">Total To Pay<span class="float-end">{amount} {currency_code}</span></p>
              <div class="d-grid"> 
                { 
                  isLoading ? <button class="btn btn-primary"><Spinner animation="border" variant="light" /></button> : <button class="btn btn-primary">Continue</button>
                }
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg d-lg-flex align-items-center">
          <ul class="nav justify-content-center justify-content-lg-start text-3">
            <li class="nav-item"> <a class="nav-link active" href="/eremit/#/about">About Us</a></li>
            <li class="nav-item"> <a class="nav-link" href="/eremit/#/contact">Support</a></li>
            <li class="nav-item"> <a class="nav-link" href="/eremit/#/help">Help</a></li>
            
            <li class="nav-item"> <a class="nav-link" href="#">Fees</a></li>
          </ul>
        </div>
        <div class="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
          <ul class="social-icons justify-content-center">
            <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
            <li class="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i class="fab fa-google"></i></a></li>
            <li class="social-icons-youtube"><a data-bs-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright pt-3 pt-lg-2 mt-2">
        <div class="row">
          <div class="col-lg">
            <p class="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a href="/eremit/#/">eRemit</a>. All Rights Reserved.</p>
          </div>
          <div class="col-lg d-lg-flex align-items-center justify-content-lg-end">
            <ul class="nav justify-content-center">
              <li class="nav-item"> <a class="nav-link active" href="#">Security</a></li>
              <li class="nav-item"> <a class="nav-link" href="#">Terms</a></li>
              <li class="nav-item"> <a class="nav-link" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
<a id="back-to-top" data-bs-toggle="tooltip" title="Back to Top" href=""><i class="fa fa-chevron-up"></i></a> 


            </div>
            </div>
        )
}

export default SendMoney