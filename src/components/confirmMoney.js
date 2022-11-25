import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-bootstrap";


const ConfirmMoney = () =>  {
  const [isLoading, SetLoading] = useState(false)
  const [reason, setReason] = useState("")
  const [isFavLoading, setFavLoading] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
    useEffect(() => {
        console.log(location)
    }, [])

    const handleSubmit = e => {
      SetLoading(true)
        e.preventDefault()
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const token = loadedData.token

    const bodyData = {
      "amount": location.state.amount,
      "asset_type": location.state.assetType,
      "receiverPubKey": location.state.receiverPubKey,
      "receiverSecKey": location.state.receiverSecKey,
      "senderPubKey": location.state.senderPubKey,
      "senderSecKey": location.state.senderSecKey,
      "transaction_id": location.state.transaction_id,
      "message": reason
  }
    const requestedOptions = {
        method: "POST",
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
    }
    fetch("http://18.176.147.191:8500/send_single_payment", requestedOptions)
    .then(result => result.json())
    .then((response) => {
        console.log(response);
        if (response.status === 100) {
          SetLoading(false)
          navigate("/success", { state: {
            "username": location.state.receivername,
            "amount": location.state.amount,
            "currency": location.state.assetType
          }})
        } else if (response.status === 403) {
          SetLoading(false)
          toast(response.message)
        } else {
          SetLoading(false)
          toast("invalid data types")
        }
    })
    }
    // #saving username
    const addContact = e => {
      setFavLoading(true)
      
      const temp = localStorage.getItem("data")
      const loadedData = JSON.parse(temp)
      const userID = loadedData.user_id
      const token = loadedData.token
      const bodData = {
        "user_id": userID,
        "username": location.state.username,
      }
  
  
      const requiredOptions4 = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(bodData)
      }
  
      fetch("http://18.176.147.191:8500/saving_contacts", requiredOptions4)
      .then(results => results.json())
      .then((response) => {
        console.log(response)
        
        if (response.status === 100) {
          setFavLoading(false)
          toast(response.message)
        } else if (response.status === 403) {
          setFavLoading(false)
          toast(response.message)
        } else {
          setFavLoading(false)
          toast("Invalid data types")
  
        }
      })
  
    }

    return (
            <div>
<div id="main-wrapper"> 
  
<header id="header">
    <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start"> 
          
          <div class="logo me-3"> <a class="d-flex" href="/eremit/#/dashboard" title="eRemit - HTML Template"><img src="assets/images/logo7.png" width="121" height="70"  alt="eRemit" /></a> </div>
          
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
            <div class="col-4 step complete">
              <div class="step-name">Details</div>
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
              <a href="/eremit/#/send-money" class="step-dot"></a> </div>
            <div class="col-4 step active">
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
      <h2 class="fw-400 text-center mt-3">Confirm Details</h2>
      <p class="lead text-center mb-4">You are sending money to <span class="fw-500">{location.state.receivername}</span></p>
      
      
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-6 mx-auto">
          <div class="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
            <h3 class="text-5 fw-400 mb-3 mb-sm-4">Payment Description</h3>
            <hr class="mx-n3 mx-sm-n5 mb-4" />
            <form id="form-send-money" onSubmit={handleSubmit}>
              {
                location.state.currency === location.state.receiverCurrency ? <p></p> :
                <p class="mb-1">Sending Amount <span class="text-3 float-end">{location.state.amount} {location.state.currency}</span></p>
              }
              <p class="mb-1">Receiving Amount <span class="text-3 float-end">{location.state.amount} {location.state.assetType}</span></p>
              <p class="mb-1">Receiver Fullname <span class="text-3 float-end">{location.state.receivername}</span></p>
              <p class="mb-1">Total fees <span class="text-3 float-end">0 {location.state.currency}</span></p>
              <hr />
              <div class="mb-4 mb-sm-5">
                <label for="description" class="form-label">Description</label>
                <input type="text" value={reason} class="form-control" onChange={e => setReason(e.target.value)} rows="4" id="description" required placeholder="Payment Reason" />
              </div>
              <p class="text-4 fw-500">Total<span class="float-end">{location.state.amount} {location.state.currency}</span></p>
              <div>
                {
                  isFavLoading ? <p class="lead text-left mb-4"> <Spinner animation="border" variant="light" /></p>: <div onClick={() => addContact()}><p class="lead text-left mb-4"><a data-bs-toggle="modal" class="ms-auto text-2 text-uppercase btn-link"><span class="bg-primary text-white rounded-pill d-inline-block px-2 mb-0"><i class="fas fa-check-circle"></i> ADD TO FAVOURITES</span></a></p></div>
                }   
              </div>
              <div class="d-grid">
                { 
                  isLoading ? <button class="btn btn-primary"><Spinner animation="border" variant="light" /></button> : <button class="btn btn-primary">Send</button>
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

export default ConfirmMoney