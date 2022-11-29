import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-bootstrap";
import 'react-phone-number-input/style.css';
import { Icon } from "semantic-ui-react";

const SendMoney = () =>  {
  const [userCurrencies, setUserCurrincies] = useState([]);
  const [currency_code, setCurrencyCode] = useState("")
  const [receiverCode, setReceiverCurrencyCode] = useState("")
  const [username, setUsername] = useState("")
  const [amount, setAmount] = useState("")
  const [allcurrencies, setAllcurrencies] = useState([])
  const [savedcontacts, setSavedcontacts] = useState([])
  const [isLoading, SetLoading] = useState(false)
  const [isSCLoading, SetSCLoading] = useState(false)
  const [receiverFullname, setReceiverFullname] = useState("")
  const [multiCurrency, setMultiCurrency] = useState(false)
  const [singleCurrency, setSingleCurrency] = useState(true)
  const [rates, setRates] = useState([])
  const [rvAmount, setrvAmount] = useState("")
  let navigate = useNavigate()
  

  useEffect(() => {
    initData()
  }, [])

  const initData = () => {
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const token = "Bearer " + loadedData.token

    const userId = {
      "user_id": loadedData.user_id
    }
    const requiredOptions = {
      method: "POST",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userId)
    }
    fetch("http://18.176.147.191:8500/user_wallets", requiredOptions)
    .then((response) => response.json())
    .then(res => {
      console.log(res)
      setUserCurrincies(res.message)
    });

    const bodyData = {
      "user_id": loadedData.user_id
    }

    const requiredDataOptions1 = {
      method: "POST",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
    }
    fetch("http://18.176.147.191:8500/saved_contacts", requiredDataOptions1)
    .then(results => results.json())
    .then((response) => {
      console.log(response)
      setSavedcontacts(response)
    })

    // all currencies
    const requiredOpt = {
      method: "GET",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
    }
    fetch("http://18.176.147.191:8500/all_currencies", requiredOpt)
    .then((response) => response.json())
    .then(currencyDetails => {
      console.log(currencyDetails)
      setAllcurrencies(currencyDetails)
      
    });

    // fetch exchange rates
    fetch("https://cliix.co/exrate.php")
    .then((response) => response.json())
    .then((res) => {
      setRates(res.data)
    })
  }

  const handleOnSubmit = e => {
    SetLoading(true)
    e.preventDefault()
    
    if (singleCurrency === true) {
      console.log(username)
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const senderId = loadedData.user_id
    const bodData = {
      "user_id": senderId,
      "receiver_name": username,
      "amount": parseFloat(amount),
      "asset_type": currency_code
  }

    const requiredOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodData)
    }

    fetch("http://18.176.147.191:8500/verify_single_payment", requiredOptions)
    .then(results => results.json())
    .then((response) => {
      console.log(response)
      if (response.status === 100) {
        SetLoading(false)
        navigate("/confirm-money", { state: {
          "amount": response.message.amount,
          "assetType": response.message.asset_type,
          "receiverPubKey": response.message.receiverPubKey,
          "receiverSecKey": response.message.receiverSecKey,
          "senderPubKey": response.message.senderPubKey,
          "senderSecKey": response.message.senderSecKey,
          "transaction_id": response.message.transaction_id,
          "receivername": receiverFullname
        }});
        
      } else if (response.status === 403) {
        SetLoading(false)
        toast(response.message)
      } else {
        SetLoading(false)
        toast("Invalid data types")

      }
    })
    } else if (multiCurrency === true) {
      console.log(username)
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const senderId = loadedData.user_id
    const bodData = {
      "sender_id": senderId,
      "currency_code": currency_code,
      "receiver_currency_code": receiverCode,
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

    fetch("http://18.176.147.191:8500/verify_currency", requiredOptions)
    .then(results => results.json())
    .then((response) => {
      console.log(response)
      if (response.status === 100) {
        SetLoading(false)
        navigate("/confirm-money", { state: {
          "senderWalletId": response.message.sender_walletId,
          "receiverWalletId": response.message.receiver_walletId,
          "amount": amount,
          "receiverMoney": response.message.receiving_money,
          "username": username,
          "currency": currency_code,
          "receiverCurrency": receiverCode,
          "receivername": receiverFullname
        }});
        
      } else if (response.status === 403) {
        SetLoading(false)
        toast(response.message)
      } else {
        SetLoading(false)
        toast("Invalid data types")

      }
    })
    } else {
      return null
    }

  }

  // delete saved contact
  const deleteSavedContact = (user) => {
    SetSCLoading(true)
    console.log(user)
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const userID = loadedData.user_id
    const token = loadedData.token
    const bodData = {
      "user_id": userID,
      "username": user,
    }


    const requiredOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(bodData)
    }

    fetch("http://18.176.147.191:8500/delete_contact", requiredOptions)
    .then(results => results.json())
    .then((response) => {
      console.log(response)
      if (response.status === 100) {
        SetSCLoading(false)
        initData()
        toast(response.message)
      } else if (response.status === 403) {
        SetSCLoading(false)
        toast(response.message)
        initData()
      } else {
        SetSCLoading(false)
        toast("Invalid data types")
        initData()
      }
    })

  }

  // getting receiver's username
  const getReceiverFullName = (username) => {
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const token = loadedData.token
    const bodData = {
      "username": username,
    }


    const requiredOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(bodData)
    }
    fetch("http://18.176.147.191:8500/userByUsername", requiredOptions)
    .then(results => results.json())
    .then((response) => {
      console.log(response)
      setReceiverFullname(response.message)
    })
    return receiverFullname
  }
  const handleDirectRadio = e => {
    setMultiCurrency(false)
    setSingleCurrency(true)
  }
  const handleMultiRadio = e => {
    setMultiCurrency(true)
    setSingleCurrency(false)
  }

  // get receiverAmount
  const getReceiverAmount = (sendCurrency, receiverCurrency, Amount) => {
    setReceiverCurrencyCode(receiverCurrency)
    const pair = sendCurrency + receiverCurrency
    rates.forEach((rt, index) => {
      if (rt.pair === pair) {
        console.log(rt.pair)
        const initialAmout = parseFloat(Amount)
        const indexRate = parseFloat(rt.index)
        const receiver_amount = initialAmout * indexRate
        setrvAmount(receiver_amount)
        console.log(receiver_amount)
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
          
          <div class="logo me-3"> <a class="d-flex" href="/eremit/#/dashboard" title="eremit - HTML Template"><img src="assets/images/logo7.png" width="121" height="70" alt="eremit" /></a> </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
          
          <nav class="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto">
                <li><a href="/eremit/#/dashboard">Dashboard</a></li>
                <li class="active"><a href="/eremit/#/send-money">Send</a></li>
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
            <div class="mb-3">
                 <label for="youSend" class="form-label">Receiver Username</label>
                 <div class="input-group">
                 <span class="input-group-text"><a href="#edit-personal-details" data-bs-toggle="modal" class="ms-auto text-7"><i class="fas fa-user-circle"></i></a></span>
                   <input type="text" class="form-control" data-bv-field="youSend" id="username" name="username"  onChange={e => setUsername(e.target.value)} value={username} placeholder="Tommy256" required />
                   
                 </div>
                 <p>Receiver Fullname: { username === "" ? <></> : getReceiverFullName(username) }</p>
               </div>
            <div class="mb-3">
                <label for="youSend" class="form-label">You Send</label>
                <div class="input-group">
                  <span class="input-group-text"></span>
                  <input type="text" class="form-control" data-bv-field="youSend" id="youSend" name="amount" required  onChange={e => { setAmount(e.target.value); getReceiverAmount(currency_code, receiverCode, e.target.value)}} value={amount} placeholder="Enter amount" />
                  <span class="input-group-text p-0">
                    <select id="youSendCurrency" data-style="form-select bg-transparent border-0" data-container="body" name="currency_code" onChange={e => setCurrencyCode(e.target.value)} data-live-search="true" class="selectpicker form-control bg-transparent" required>
                    <option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar"  value="">currency <i class="bi bi-arrow-down"></i></option>
                      { 
                        userCurrencies.length > 0 ? userCurrencies.map((cr) => (
                          <option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar"  value={cr.asset_type}>{cr.asset_type == "native" ? "XLM" : cr.asset_code}</option>
                        )) : <></>
                      }
                      
                      
                    </select>
                    </span>
                </div>
              </div>
            
              
              <div class="mb-3">
                <label for="youSend" class="form-label">Sending Type</label>
                <div class="input-group">
                  <input type="radio" onChange={handleDirectRadio} checked={singleCurrency === true} value="false" name="direct" /> Direct
                <input type="radio" onChange={handleMultiRadio} checked={multiCurrency === true} value="true" name="multi-currency" /> Multi-Currency
                </div>
              </div>
              {
                multiCurrency ?
                <div class="mb-3">
                <label for="youSend" class="form-label">Receives</label>
                <div class="input-group">
                  <input type="text" class="form-control" data-bv-field="youSend" value={rvAmount} id="username" name="receiverAmount" placeholder="0" />
                  <span class="input-group-text p-0">
                    <select id="youSendCurrency" data-style="form-select bg-transparent border-0" data-container="body" name="currency_code" required onChange={e => setReceiverCurrencyCode(e.target.value)} data-live-search="true" class="selectpicker form-control bg-transparent">
                    <option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar"  value="">currency <Icon name='angle down' /></option>
                      { 
                        allcurrencies.map((cr) => (
                          <option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar"  value={cr.currency_code}>{cr.currency_code}</option>
                        )) 
                      }
                      
                      
                    </select>
                  </span>
                </div>
              </div>
              
                 :
                 <p></p>
              }
              <hr />
              <p>Total Fees<span class="float-end">0 {currency_code}</span></p>
              <hr />
              {
                multiCurrency ? <p class="text-4 fw-500">Total To Pay<span class="float-end">{rvAmount} {receiverCode}</span></p>
                : <p class="text-4 fw-500">Total To Pay<span class="float-end">{amount} {currency_code}</span></p>
              }
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
  {/* saved contacts start */}
  <div id="edit-personal-details" class="modal fade " role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title fw-400">Saved Contacts</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="transaction-title py-2 px-4">
                  <div class="row fw-00">
                    <div class="col-2 col-sm-3"><span class="">Name</span></div>
                    <div class="col-2 col-sm-3 d-none d-sm-block">Phonenumber</div>
                    <div class="col-2 col-sm-3 d-none d-sm-block">Username</div>
                    <div class="col col-sm-1 text-end">Action</div>
                  </div>
                </div>
                <div class="transaction-list">
                {
                  savedcontacts.length > 0 ?
                    savedcontacts.map((sc) => (
                      <div class="transaction-item px-4 py-3" data-bs-toggle="modal" onClick={() => setUsername(sc.username)}>
                        <div class="row align-items-center flex-row">
                          <div class="col-2 col-sm-3 text-1"> <p>{sc.first_name} {sc.last_name}</p></div>
                          <div class="col-2 col-sm-3 d-none d-sm-block text-1">  <p>{sc.phone_number}</p></div>
                          <div class="col-2 col-sm-3 d-none d-sm-block text-1"><p>{sc.username}</p></div>
                          {
                            isSCLoading ? 
                            <div class="col col-sm-1 text-end text-1">
                              <div>
                                <p class="col-sm-9 text-1">
                                  <span class="bg-danger text-white rounded-pill d-inline-block px-2 mb-0"> 
                                    <Spinner animation="border" variant="light" />
                                  </span>
                                </p>
                              </div>
                            </div>
                            
                            : 
                            <div class="col col-sm-1 text-end text-1" >
                              <div onClick={() => deleteSavedContact(sc.username)}>
                                <p class="col-sm-9 text-1">
                                  <span class="bg-danger text-white rounded-pill d-inline-block px-2 mb-0"> remove</span>
                                </p>
                              </div>
                              <div onClick={() => setUsername(sc.username)}>
                                <p class="col-sm-9 text-1">
                                  <span class="bg-primary text-white rounded-pill d-inline-block px-2 mb-0"> choose</span>
                                </p>
                              </div>
                            </div>
                        
                          } 
                        </div>
                      </div>
                    )) :
                <div class="transaction-item px-4 py-3" data-bs-toggle="modal">
                  <div class="row align-items-center flex-row">
                    <div class="col-2 col-sm-3"> <p>No saved Contacts</p></div>
                    <div class="col-2 col-sm-3 d-none d-sm-block">  <p></p></div>
                    <div class="col-2 col-sm-3 d-none d-sm-block"><p class="text-muted"></p></div>
                    <div class="col col-sm-1 text-end text-1">  <p></p> </div>
                  </div>
                </div>
                }
                </div>
                
                
                
              </div>
            </div>
          </div>

          
        
  {/* saved contacts end */}
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
<a id="back-to-top" data-bs-toggle="tooltip" title="Back to Top" href=""><i class="fa fa-chevron-up"></i></a> 


            </div>
            </div>
        )
}

export default SendMoney