import React, { Component } from "react";


class Contact extends Component {
    render() {
        return(
            <div>
                {/* <!-- Preloader --> */}
{/* <div id="preloader">
  <div data-loader="dual-ring"></div>
</div> */}
{/* <!-- Preloader End -->  */}

{/* <!-- Document Wrapper   
============================================= --> */}
<div id="main-wrapper">
{/* 
<!-- Header
  ============================================= --> */}
<header id="header">
  <div class="container">
    <div class="header-row">
      <div class="header-column justify-content-start"> 
        {/* <!-- Logo
          ============================= --> */}
        <div class="logo me-3"> <a class="d-flex" href="/" title="Payyed - HTML Template"><img src="assets/images/logo.png" alt="Payyed" /></a> </div>
        {/* <!-- Logo end -->  */}
        {/* <!-- Collapse Button
          ============================== --> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
        {/* <!-- Collapse Button end -->  */}
        
        {/* <!-- Primary Navigation
          ============================== --> */}
        <nav class="primary-menu navbar navbar-expand-lg">
          <div id="header-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto">
              {/* <!-- <li><a href="landing-page-send.html">Send</a></li>
              <li><a href="landing-page-receive.html">Receive</a></li> --> */}
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              </ul>
              </div>
              </nav>
              
          {/* <!-- Primary Navigation end -->  */}
      </div>
      <div class="header-column justify-content-end"> 
        {/* <!-- Login & Signup Link
          ============================== --> */}
        <nav class="login-signup navbar navbar-expand">
          <ul class="navbar-nav">
            <li><a href="/login">Login</a> </li>
            <li class="align-items-center h-auto ms-sm-3"><a class="btn btn-primary" href="/register">Sign Up</a></li>
          </ul>
        </nav>
        {/* <!-- Login & Signup Link end -->  */}
      </div>
    </div>
  </div>
</header>
{/* <!-- Header End -->  */}

{/* <!-- Page Header
============================================= --> */}
<section class="page-header page-header-text-light bg-dark-3 py-5">
  <div class="container">
    <div class="row text-center">
      <div class="col-12">
        <ul class="breadcrumb mb-0">
          <li><a href="/home">Home</a></li>
          <li class="active">Contact Us</li>
        </ul>
      </div>
      <div class="col-12">
        <h1>Contact Us</h1>
      </div>
    </div>
  </div>
</section>
{/* <!-- Page Header End -->  */}

{/* <!-- Content
  ============================================= --> */}
<div id="content">
  <div class="container">
    <div class="row g-4">
      <div class="col-md-4">
        <div class="bg-white shadow-md rounded h-100 p-3">
          <div class="featured-box text-center">
            <div class="featured-box-icon text-primary mt-4"> <i class="fas fa-map-marker-alt"></i></div>
            <h3>Payyed Inc.</h3>
            <p>4th Floor, Plot No.22, Above Public Park<br />
              145 Murphy Canyon Rd.<br />
              Suite 100-18<br />
              San Diego CA 2028 </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="bg-white shadow-md rounded h-100 p-3">
          <div class="featured-box text-center">
            <div class="featured-box-icon text-primary mt-4"> <i class="fas fa-phone"></i> </div>
            <h3>Telephone</h3>
            <p class="mb-0">(+060) 9898980098</p>
            <p>(+060) 8898880088</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="bg-white shadow-md rounded h-100 p-3">
          <div class="featured-box text-center">
            <div class="featured-box-icon text-primary mt-4"> <i class="fas fa-envelope"></i> </div>
            <h3>Business Inquiries</h3>
            <p>info@payyed.com</p>
          </div>
        </div>
      </div>
    </div>
	<div class="text-center py-5">
          <h2 class="text-8">Get in touch</h2>
          <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div class="d-flex flex-column">
            <ul class="social-icons social-icons-lg social-icons-colored justify-content-center">
              <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
              <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
              <li class="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i class="fab fa-google"></i></a></li>
              <li class="social-icons-linkedin"><a data-bs-toggle="tooltip" href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
              <li class="social-icons-youtube"><a data-bs-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i class="fab fa-youtube"></i></a></li>
              <li class="social-icons-instagram"><a data-bs-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
  </div>
  <section class="hero-wrap section shadow-md">
    <div class="hero-mask opacity-9 bg-primary"></div>
    <div class="hero-bg" style={{ backgroundImage: "url(/assets/images/bg/image-2.jpg)" }}></div>
    <div class="hero-content">
      <div class="container text-center">
        <h2 class="text-9 text-white">Awesome Customer Support</h2>
        <p class="text-4 text-white mb-4">Have you any query? Don't worry. We have great people ready to help you whenever you need it.</p>
        <a href="#" class="btn btn-light">Find out more</a> </div>
    </div>
  </section>
  {/* <!-- Content end -->  */}
  
  {/* <!-- Footer
  ============================================= --> */}
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg d-lg-flex align-items-center">
          <ul class="nav justify-content-center justify-content-lg-start text-3">
            <li class="nav-item"> <a class="nav-link active" href="#">About Us</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Support</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Help</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Careers</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Affiliate</a></li>
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
            <p class="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a href="#">Payyed</a>. All Rights Reserved.</p>
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
  {/* <!-- Footer end -->  */}
</div>
{/* <!-- Document Wrapper end -->  */}

{/* <!-- Back to Top
============================================= -->  */}
<a id="back-to-top" data-bs-toggle="tooltip" title="Back to Top" href="javascript:void(0)"><i class="fa fa-chevron-up"></i></a>

{/* <!-- Styles Switcher --> */}
<div id="styles-switcher" class="left">
  <h2 class="text-3">Color Switcher</h2>
  <hr />
  <ul>
    <li class="blue" data-bs-toggle="tooltip" title="Blue" data-path="css/color-blue.css"></li>
	<li class="indigo" data-bs-toggle="tooltip" title="Indigo" data-path="css/color-indigo.css"></li>
    <li class="purple" data-bs-toggle="tooltip" title="Purple" data-path="css/color-purple.css"></li>
	<li class="pink" data-bs-toggle="tooltip" title="Pink" data-path="css/color-pink.css"></li>
	<li class="red" data-bs-toggle="tooltip" title="Red" data-path="css/color-red.css"></li>
    <li class="orange" data-bs-toggle="tooltip" title="Orange" data-path="css/color-orange.css"></li>
	<li class="yellow" data-bs-toggle="tooltip" title="Yellow" data-path="css/color-yellow.css"></li>
	<li class="teal" data-bs-toggle="tooltip" title="Teal" data-path="css/color-teal.css"></li>
    <li class="cyan" data-bs-toggle="tooltip" title="Cyan" data-path="css/color-cyan.css"></li>
    <li class="brown" data-bs-toggle="tooltip" title="Brown" data-path="css/color-brown.css"></li>
  </ul>
  <button class="btn btn-dark btn-sm border-0 fw-400 rounded-0 shadow-none" data-bs-toggle="tooltip" title="Green" id="reset-color">Reset Default</button>
  <button class="btn switcher-toggle"><i class="fas fa-cog"></i></button>
</div>
{/* <!-- Styles Switcher End -->  */}

{/* <!-- Script -->  */}
<script src="assets/vendor/jquery/jquery.min.js"></script> 
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> 
<script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script> 
{/* <!-- Style Switcher -->  */}
<script src="assets/js/switcher.min.js"></script> 
<script src="assets/js/theme.js"></script>
</div>

            </div>
        )
    }
}
export default Contact 