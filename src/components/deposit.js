import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-number-input/style.css';
import { Spinner } from "react-bootstrap";



const Deposit = () => {
    const navigate = useNavigate()
    const [userPhonenumber, setUserPhonenumber] = useState("")
    const [userCurrencies, setUserCurrincies] = useState([]);
    const [currency_code, setCurrencyCode] = useState("")
    const [transType, setTransType] = useState("")
    const [amount, setAmount] = useState("")
    const [isLoading, SetLoading] = useState(false)

    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const userId = loadedData.user_id
    const token = 'Bearer ' + loadedData.token
    useEffect(() => {
 
        const bodyData = {
            "user_id": userId
          }
          const requiredDataOptions = {
            method: "POST",
            headers: {
              "Authorization": token,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)
          }
          fetch("http://18.176.147.191:8500/user_wallet_details", requiredDataOptions)
          .then(results => results.json())
          .then((response) => {
            console.log(response)
            setUserCurrincies(response)
          })
    }, [])

    const handleOnSubmit = e => {
        e.preventDefault()
        SetLoading(true)
        navigate("/confirm-deposit", { state: {
            "userId": userId,
            "currency": currency_code,
            "amount": amount,
            "phone": userPhonenumber,
            "trans": transType
        }})
      }
    return ( 
        <>
            <div id="main-wrapper"> 

            <header id="header">
    <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start"> 
          
          <div class="logo me-3"> <a class="d-flex" href="/eremit/#/dashboard" title="eRemit - HTML Template"><img src="assets/images/logo7.png" width="121" height="70" alt="eRemit" /></a> </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
          
          <nav class="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto">
                <li><a href="/eremit/#/dashboard">Dashboard</a></li>
                <li><a href="/eremit/#/send-money">Send</a></li>
                <li class="active"><a href="/eremit/#/deposit">Deposit/Withdraw</a></li>
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
  <div class="bg-white">
    <div class="container d-flex justify-content-center">
      <ul class="nav nav-tabs nav-lg border-bottom-0">
        <li class="nav-item"> <a class="nav-link active" href="/eremit/#/deposit">Deposit</a></li>
        <li class="nav-item"> <a class="nav-link" href="/eremit/#/withdraw">Withdraw</a></li>
      </ul>
    </div>
  </div>
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
      <h2 class="fw-400 text-center mt-3 mb-4">Deposit Money</h2>
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-6 mx-auto">
          <div class="bg-white shadow-sm rounded p-3 pt-sm-5 pb-sm-5 px-sm-5 mb-4"> 
            
            
            <form id="form-send-money" onSubmit={handleOnSubmit}>
            <div className="mb-3">
                  <PhoneInput
                    specialLabel="Phone Number"
                    placeholder="Enter your phone number"
                    class="form-control"
                    defaultCountry="UG"
                    value={userPhonenumber}
                    onChange={setUserPhonenumber} />
              </div>
              <div class="mb-3">
                <label for="youSend">Amount</label>
                <div class="input-group">
                  <input type="text" class="form-control" data-bv-field="youSend" id="youSend" value={amount} onChange={e => setAmount(e.target.value)} placeholder="" />
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
              <div class="mb-3">
                <label for="paymentMethod" class="form-label">Payment Method</label>
                <select id="cardType" class="form-select" required onChange={e => setTransType(e.target.value)}>
                  <option value="">Select Payment Method</option>
                  <option value="From_MM">From Mobile Money (UGX, RWF, KES, NGN)</option>
                </select>
              </div><hr />
              <p class="text-4 fw-500">You'll deposit <span class="float-end">{amount} {currency_code}</span></p>
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
  </div>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg d-lg-flex align-items-center">
          <ul class="nav justify-content-center justify-content-lg-start text-3">
            <li class="nav-item"> <a class="nav-link actnpm run ive" href="/eremit/#/about">About Us</a></li>
            <li class="nav-item"> <a class="nav-link" href="/eremit/#/help">Support</a></li>
            <li class="nav-item"> <a class="nav-link" href="/eremit/#/contact">Contact us</a></li>
          </ul>
        </div>
        <div class="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
          <ul class="social-icons justify-content-center">
            <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="https://twitter.com/InnoIranks?t=cBiEX8EUG087o4QreiijeQ&s=08" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
            <li class="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i class="fab fa-google"></i></a></li>
            <li class="social-icons-youtube"><a data-bs-toggle="tooltip" href="https://youtube.com/channel/UCAVW3ma6ljB3iYcn77gSF9w/" target="_blank" title="Youtube"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright pt-3 pt-lg-2 mt-2">
        <div class="row">
          <div class="col-lg">
            <p class="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a href="http://www.clic.world">clic.world</a>. All Rights Reserved.</p>
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
        </>
     );
}

export default Deposit;