import React, { Component } from "react";


class About extends Component {
    render() {
        return (
            <div>
                {/* <!-- Preloader --> */}
{/* <div id="preloader">
  <div data-loader="dual-ring"></div>
</div> */}
{/* <!-- Preloader End -->  */}

{/* <!-- Document Wrapper   
============================================= --> */}
<div id="main-wrapper"> 
  
  {/* <!-- Header
  ============================================= --> */}
  <header id="header">
    <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start"> 
          {/* <!-- Logo
          ============================= --> */}
          <div class="logo me-3"> <a class="d-flex" href="/eremit/#/" title="eRemit - HTML Template"><img src="assets/images/logo7.png"width="121" height="70"alt="eRemit" /></a> </div>
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
				<li class="active"><a href="/eremit/#/about">About Us</a></li>
                <li><a href="/eremit/#/contact">Contact Us</a></li>
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
              <li><a href="/eremit/#/login">Login</a> </li>
              <li class="align-items-center h-auto ms-sm-3"><a class="btn btn-primary" href="/eremit/#/register">Sign Up</a></li>
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
  <section class="page-header page-header-text-light py-0 mb-0">
	<section class="hero-wrap section">
    <div class="hero-mask opacity-7 bg-dark"></div>
    <div class="hero-bg hero-bg-scroll" style={{ backgroundImage: "url(/assets/images/bg/image-2.jpg)" }}></div>
    <div class="hero-content">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="text-11 fw-500 text-white mb-3">About eRemit</h1>
            <p class="text-5 text-white lh-base mb-4">Our mission is to help you save on transfer fees and exchange rates!</p>
            <a href="/eremit/#/register" class="btn btn-primary m-2">Open a Free Account</a>  </div>
        </div>
      </div>
    </div>
  </section>
    </section>
  {/* <!-- Page Header end -->  */}
  
  {/* <!-- Content
  ============================================= --> */}
  <div id="content">
    
    {/* <!-- Who we are
    ============================================= --> */}
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex">
            <div class="my-auto px-0 px-lg-5 mx-2">
              <h2 class="text-9 mb-4">Who we are</h2>
              <p class="text-4">eRemit is the faster, more secure way to send and receive money online. It lets you pay for your favorite things at millions of online stores in the U.S. and across 203 global markets—all without the hassle of converting currency. So it’s just as easy to know how much you’re spending as it is to spend it. It's free to sign up for an eRemit account to send and receive money to other eRemit users.</p>
            </div>
          </div>
          <div class="col-lg-6 my-auto text-center"> <img class="img-fluid shadow-lg rounded-3" src="assets/images/who-we-are.jpg" alt="" /> </div>
        </div>
      </div>
    </section>
    {/* <!-- Who we are end --> */}
    
    {/* <!-- Our Values
    ============================================= --> */}
    {/* <section class="section bg-white">
      <div class="container">
        <div class="row g-0">
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="row">
              <div class="col-6 col-lg-7 ms-auto mb-lg-n5"> <img class="img-fluid rounded-3 shadow-lg" src="assets/images/our-values-vision.jpg" alt="banner" /> </div>
              <div class="col-6 col-lg-8 mt-lg-n5"> <img class="img-fluid rounded-3 shadow-lg" src="assets/images/our-values-mission.jpg" alt="banner" /> </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex order-1 order-lg-2">
            <div class="my-auto px-0 px-lg-5">
              <h2 class="text-9 mb-4">Our Values</h2>
              <h4 class="text-4 fw-500">Our Mission</h4>
              <p class="tex-3">We’re on a mission to make a cashless World</p>
              <h4 class="text-4 fw-500 mb-2">Our goal</h4>
              <p class="tex-3">To make international money transfer fast, simple and secure so Whichever method you choose only takes a few steps to send money online with us</p>
              <h4 class="text-4 fw-500 mb-2">Our vision</h4>
              <p class="tex-3"> Ready to change the world?</p>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* <!-- Our Values end --> */}
    
    {/* <!-- Leadership
    ============================================= --> */}
    {/* <section class="section">
      <div class="container">
        <h2 class="text-9 text-center">Leadership</h2>
        <p class="lead text-center mb-5">We pride ourselves on hiring a diverse team from different cultural and professional backgrounds. With 1000+ employees around the world, there are more than 30 nationalities in our  headquarters alone. We also have regional hubs around the world.</p>
        <div class="row g-4">
          <div class="col-sm-6 col-md-3 text-center">
            <div class="team rounded d-inline-block"> <img class="img-fluid rounded" alt="" src="assets/images/image7.jpeg" />
              <h3>Emmanuel Mbonye</h3>
              <p class="text-muted">C0-founder and CTO</p>
              <ul class="social-icons social-icons-sm d-inline-flex">
                <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="#" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                <li class="social-icons-google"><a data-bs-toggle="tooltip" href="" target="_blank" title="Google"><i class="fab fa-google"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 text-center">
            <div class="team rounded d-inline-block"> <img class="img-fluid rounded" alt="" src="assets/images/image2.jpg" height="200PX" />
              <h3>IRANKUNDA INNOCENT</h3>
              <p class="text-muted">FULL STACK DEVELOPER</p>
              <ul class="social-icons social-icons-sm d-inline-flex">
                <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                <li class="social-icons-google"><a data-bs-toggle="tooltip" href="" target="_blank" title="Google"><i class="fab fa-google"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 text-center" height="200px">
            <div class="team rounded d-inline-block"> <img class="img-fluid rounded" alt="" src="assets/images/image4.jpg" />
              <h3>NTWALI ANDREW</h3>
              <p class="text-muted">FULL STACK DEVELOPER</p>
              <ul class="social-icons social-icons-sm d-inline-flex">
                <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                <li class="social-icons-google"><a data-bs-toggle="tooltip" href="" target="_blank" title="Google"><i class="fab fa-google"></i></a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section> */}
    {/* <!-- Leadership end --> */}
    
 
    
    {/* <!-- Testimonial
    ============================================= --> */}
    <section class="section">
      <div class="container">
        <h2 class="text-9 text-center">What people are saying about eRemit</h2>
        <p class="lead text-center mb-4">A payment experience that everyone would like to explore</p>
        <div class="owl-carousel owl-theme" data-autoplay="true" data-nav="true" data-loop="true" data-margin="30" data-slideby="2" data-stagepadding="5" data-items-xs="1" data-items-sm="1" data-items-md="2" data-items-lg="2">
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-9 text-muted opacity-2 mb-0"><i class="fa fa-quote-left"></i></p>
			  <p class="text-4">“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”</p>
              <strong class="d-block fw-500">Jay Shah</strong> <span class="text-muted">Founder at Icomatic Pvt Ltd</span> </div>
          </div>
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-9 text-muted opacity-2 mb-0"><i class="fa fa-quote-left"></i></p>
			  <p class="text-4">“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”</p>
              <strong class="d-block fw-500">Patrick Cary</strong> <span class="text-muted">Freelancer from USA</span> </div>
          </div>
          <div class="item mh-100">
            <div class="testimonial rounded text-center p-4">
              <p class="text-9 text-muted opacity-2 mb-0"><i class="fa fa-quote-left"></i></p>
			  <p class="text-4">“Fast easy to use transfers to a different currency. Much better value that the banks.”</p>
              <strong class="d-block fw-500">De Mortel</strong> <span class="text-muted">Online Retail</span> </div>
          </div>
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-9 text-muted opacity-2 mb-0"><i class="fa fa-quote-left"></i></p>
			  <p class="text-4">“I have used them twice now. Good rates, very efficient service and it denies high street banks an undeserved windfall. Excellent.”</p>
              <strong class="d-block fw-500">Chris Tom</strong> <span class="text-muted">User from UK</span> </div>
          </div>
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-9 text-muted opacity-2 mb-0"><i class="fa fa-quote-left"></i></p>
			  <p class="text-4">“It's a real good idea to manage your money by eRemit. The rates are fair and you can carry out the transactions without worrying!”</p>
              <strong class="d-block fw-500">Mauri Lindberg</strong> <span class="text-muted">Freelancer from Australia</span> </div>
          </div>
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-9 text-muted opacity-2 mb-0"><i class="fa fa-quote-left"></i></p>
			  <p class="text-4">“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. I'm only using it for sending money to friends at the moment.”</p>
              <strong class="d-block fw-500">Dennis Jacques</strong> <span class="text-muted">User from USA</span> </div>
          </div>
        </div>
        <div class="text-center mt-4"><a href="#" class="btn-link text-4">See more people review<i class="fas fa-chevron-right text-2 ms-2"></i></a></div>
      </div>
    </section>
    {/* <!-- Testimonial end --> */}
    
    {/* <!-- JOIN US
    ============================================= --> */}
    <section class="section bg-primary py-5">
      <div class="container text-center">
        <div class="row gy-4">
          <div class="col-sm-6 col-md-3">
            <div class="featured-box text-center">
              <div class="featured-box-icon text-light mb-2"> <i class="fas fa-globe"></i> </div>
              <h4 class="text-12 text-white mb-0">180+</h4>
              <p class="text-4 text-white mb-0">Countries</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="featured-box text-center">
              <div class="featured-box-icon text-light mb-2"> <i class="fas fa-dollar-sign"></i> </div>
              <h4 class="text-12 text-white mb-0">120</h4>
              <p class="text-4 text-white mb-0">Currencies</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="featured-box text-center">
              <div class="featured-box-icon text-light mb-2"> <i class="fas fa-users"></i> </div>
              <h4 class="text-12 text-white mb-0">2.5M</h4>
              <p class="text-4 text-white mb-0">Users</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="featured-box text-center">
              <div class="featured-box-icon text-light mb-2"> <i class="far fa-life-ring"></i> </div>
              <h4 class="text-12 text-white mb-0">24X7</h4>
              <p class="text-4 text-white mb-0">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- JOIN US end --> */}
    
  </div>
  {/* <!-- Content end -->  */}
  
  {/* <!-- Footer
  ============================================= --> */}
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg d-lg-flex align-items-center">
          <ul class="nav justify-content-center justify-content-lg-start text-3">
            <li class="nav-item"> <a class="nav-link active" href="/eremit/#/about">About Us</a></li>
            <li class="nav-item"> <a class="nav-link" href="/eremit/#/contact">Support</a></li>
            <li class="nav-item"> <a class="nav-link" href="/eremit/#/help">Help</a></li>
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
  {/* <!-- Footer end -->  */}
  
</div>
{/* <!-- Document Wrapper end -->  */}

{/* <!-- Back to Top
============================================= -->  */}
<a id="back-to-top" data-bs-toggle="tooltip" title="Back to Top" href="javascript:void(0)"><i class="fa fa-chevron-up"></i></a> 

{/* <!-- Video Modal
============================================= --> */}
<div class="modal fade" id="videoModal" tabIndex="-1" role="dialog">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content bg-transparent border-0">
      <button type="button" class="btn-close btn-close-white ms-auto me-n3" data-bs-dismiss="modal" aria-label="Close"></button>
      <div class="modal-body p-0">
        <div class="ratio ratio-16x9">
          <iframe id="video" src="" allow="autoplay;" allowFullScreen=""></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Video Modal end -->  */}


{/* <!-- Script -->  */}
<script src="assets/vendor/jquery/jquery.min.js"></script> 
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> 
<script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script> 
{/* <!-- Style Switcher -->  */}
<script src="assets/js/switcher.min.js"></script> 
<script src="assets/js/theme.js"></script>

            </div>
        )
    }
}
export default About