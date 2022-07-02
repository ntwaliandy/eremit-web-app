import React, { Component } from "react";


class Register extends Component {
    render() {
        return (
            <div>
                {/* <!-- Preloader --> */}
{/* <div id="preloader">
  <div data-loader="dual-ring"></div>
</div> */}
{/* <!-- Preloader End --> */}
<div id="main-wrapper">
  <div class="container-fluid px-0">
    <div class="row g-0 min-vh-100">
      <div class="col-md-6"> 
        {/* <!-- Get Verified! Text
        ============================================= --> */}
        <div class="hero-wrap d-flex align-items-center h-100">
          <div class="hero-mask opacity-8 bg-primary"></div>
          <div class="hero-bg hero-bg-scroll" style={{ backgroundImage: "url(/assets/images/bg/image-3.jpg)" }}></div>
          <div class="hero-content mx-auto w-100 h-100 d-flex flex-column">
            <div class="row g-0">
              <div class="col-10 col-lg-9 mx-auto">
                <div class="logo mt-5 mb-5 mb-md-0"> <a class="d-flex" href="/" title="Payyed - HTML Template"><img src="assets/images/logo-light.png" alt="Payyed" /></a> </div>
              </div>
            </div>
            <div class="row g-0 my-auto">
              <div class="col-10 col-lg-9 mx-auto">
                <h1 class="text-11 text-white mb-4">Get Verified!</h1>
                <p class="text-4 text-white lh-base mb-5">Every day, Payyed makes thousands of customers happy.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Get Verified! Text End -->  */}
      </div>
      <div class="col-md-6 d-flex align-items-center"> 
        {/* <!-- SignUp Form
        ============================================= --> */}
        <div class="container my-4">
          <div class="row g-0">
            <div class="col-11 col-lg-9 col-xl-8 mx-auto">
              <h3 class="fw-400 mb-4">Sign Up</h3>
              <form id="loginForm" method="post">
                <div class="mb-3">
                  <label for="fullName" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="fullName" required placeholder="Enter Your Name" />
                </div>
                <div class="mb-3">
                  <label for="emailAddress" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="emailAddress" required placeholder="Enter Your Email" />
                </div>
                <div class="mb-3">
                  <label for="loginPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="loginPassword" required placeholder="Enter Password" />
                </div>
                <div class="d-grid mt-4 mb-3"><button class="btn btn-primary" type="submit"> Sign Up</button></div>
              </form>
              <p class="text-3 text-center text-muted">Already have an account? <a class="btn-link" href="/login">Log In</a></p>
            </div>
          </div>
        </div>
        {/* <!-- SignUp Form End -->  */}
      </div>
    </div>
  </div>
</div>
{/* <!-- Back to Top
============================================= -->  */}
<a id="back-to-top" data-bs-toggle="tooltip" title="Back to Top" href="javascript:void(0)"><i class="fa fa-chevron-up"></i></a> 

{/* <!-- Script -->  */}
<script src="assets/vendor/jquery/jquery.min.js"></script> 
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> 
{/* <!-- Style Switcher -->  */}
<script src="assets/js/switcher.min.js"></script> 
<script src="assets/js/theme.js"></script>
<center><font size="2">This is the free demo result. For a full version of this website, please go to  <a href="https://www6.waybackmachinedownloader.com/website-downloader-online/scrape-all-files/">Website Downloader</a></font></center>

            </div>
        )
    }
}
export default Register  
        
