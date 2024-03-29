import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { Spinner } from "react-bootstrap";

const ConfirmKyc = () =>  {
    const [frontPic, setFrontPic] = useState([])
    const [backPic, setBackPic] = useState([])
    const [idPic, setIdPic] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    // create kyc
const handleSubmit = e => {
    setIsLoading(true)
    e.preventDefault()
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const token = "Bearer " + loadedData.token
    const user_id = loadedData.user_id

    const data = new FormData()

    data.append("user_id", user_id)
    data.append("first_name", location.state.firstname)
    data.append("last_name", location.state.lastname)
    data.append("date_of_birth", location.state.date)
    data.append("gender", location.state.gender)
    data.append("nin", location.state.nin)
    data.append("status", "approved")
    data.append("front_pic", frontPic)
    data.append("back_pic", backPic)
    data.append("personal_pic", idPic)
  
    
    // required options
    const requiredOp = {
      headers: {
        'content-type': 'multipart/form-data',
        'Accept': "application/json",
        'Authorization': token
      }
    }
    axios.post("http://18.176.147.191:8500/add_kyc", data, requiredOp)
    .then((response) => {
      setIsLoading(false)
      console.log(response)
      if (response.data.status == 100) {
        navigate("/kyc-success")
      } else if(response.data.status == 403) {
        toast(response.data.message)
      } else {
        setIsLoading(false)
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
  <div class="bg-primary">
    <div class="container d-flex justify-content-center">
      <ul class="nav nav-pills alternate nav-lg border-bottom-0">
        <li class="nav-item"> <a class="nav-link" href="/eremit/#/my-profile">Account</a></li>
        <li class="nav-item"> <a class="nav-link active" href="/eremit/#/kyc">Kyc</a></li>
      </ul>
    </div>
  </div>
  <div id="content" class="py-4">
    <div class="container">
    <div class="row mt-4 mb-5">
        <div class="col-lg-11 mx-auto">
          <div class="row widget-steps">
            <div class="col-4 step complete">
              <div class="step-name">Personal Details</div>
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
              <a href="/eremit/#/kyc" class="step-dot"></a> </div>
            <div class="col-4 step disabled">
              <div class="step-name">Document Files</div>
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
      <h2 class="fw-400 text-center mt-3">Upload your Documents</h2>
      <p class="lead text-center mb-4">Approve your KYC</p>
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-6 mx-auto">
          <div class="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
            <h3 class="text-5 fw-400 mb-3 mb-sm-4">Personal Details</h3>
            <hr class="mx-n3 mx-sm-n5 mb-4" />
            <form id="form-send-money" onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="youSend" class="form-label">ID Front Picture</label>
                <div class="input-group">
                
                  <input type="file" class="form-control" data-bv-field="youSend" id="username" onChange={(e) => setFrontPic(e.target.files[0])} name="front_pic" required  />
                  
                </div>
            </div>

            <div class="mb-3">
                <label for="youSend" class="form-label">ID Back Picture</label>
                <div class="input-group">
                
                  <input type="file" class="form-control" data-bv-field="youSend" id="username" onChange={(e) => setBackPic(e.target.files[0])} name="back_pic" required  placeholder="John" />
                  
                </div>
            </div>
            <div class="mb-3">
                <label for="youSend" class="form-label">Passport Picture</label>
                <div class="input-group">
                
                  <input type="file" class="form-control" data-bv-field="youSend" id="username" onChange={(e) => setIdPic(e.target.files[0])} name="pass_pic" required  placeholder="John" />
                  
                </div>
            </div>
              <hr />
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

export default ConfirmKyc