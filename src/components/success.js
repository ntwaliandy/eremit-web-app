import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";


const Success = () =>  {
    const location = useLocation()
    
    return (
            <div>
<div id="main-wrapper"> 
  
<header id="header">
    <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start"> 
          
          <div class="logo me-3"> <a class="d-flex" href="/eremit" title="eremit - HTML Template"><img src="assets/images/logo7.png" width="121" height="70" alt="eremit" /></a> </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
          
          <nav class="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto">
                <li><a href="/eremit/#/dashboard">Dashboard</a></li>
                <li class="active"><a href="/eremit/#/send-money">Send</a></li>
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
              <span class="step-dot"></span> </div>
            <div class="col-4 step complete">
              <div class="step-name">Confirm</div>
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
              <span class="step-dot"></span> </div>
            <div class="col-4 step complete">
              <div class="step-name">Success</div>
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
              <span class="step-dot"></span> </div>
          </div>
        </div>
      </div>
      <h2 class="fw-400 text-center mt-3 mb-4">Send Money</h2>
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-6 mx-auto"> 
          <div class="bg-white text-center shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
            <div class="my-4">
              <p class="text-success text-20 lh-1"><i class="fas fa-check-circle"></i></p>
              <p class="text-success text-8 fw-500 lh-1">Success!</p>
              <p class="lead">Transactions Complete</p>
            </div>
            <p class="text-3 mb-4">You've Succesfully sent <span class="text-4 fw-500">{location.state.amount} {location.state.currency}</span> to <span class="fw-500">{location.state.username}</span>, See transaction details under <a class="btn-link" href="/eremit/#/dashboard">Your wallet</a>.</p>
            <div class="d-grid"><a href="/eremit/#/send-money"><button class="btn btn-primary">Send Money Again</button></a></div>
            <a class="text-3 d-inline-block btn-link mt-4" href="#"><i class="fas fa-print"></i> Print</a> </div>
        </div>
      </div>
    </div>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg d-lg-flex align-items-center">
          <ul class="nav justify-content-center justify-content-lg-start text-3">
            <li class="nav-item"> <a class="nav-link active" href="/eremit/#/about">About Us</a></li>
            <li class="nav-item"> <a class="nav-link" href="/eremit/#/contact">Contact us</a></li>
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

export default Success