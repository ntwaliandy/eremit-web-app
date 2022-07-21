import React, { Component } from "react";


class Help extends Component {
    render() {
        return (
            <div>
                <div id="main-wrapper"> 
                <header id="header">
    <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start"> 
          
          <div class="logo me-3"> <a class="d-flex" href="/#" title="Payyed - HTML Template"><img src="assets/images/logo.png" alt="Payyed" /></a> </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
          
          <nav class="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto">
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/transactions">Transactions</a></li>
                <li><a href="/send-money">Send</a></li>
                <li class="active"><a href="/help">Help</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="header-column justify-content-end"> 
          <nav class="login-signup navbar navbar-expand">
          <div class="col-auto d-flex align-items-center ms-auto">
                    <div class="dropdown"> <a class="text-muted btn-link" href="#" role="button" id="statements" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img class="rounded-circle" src="assets/images/profile-thumb-sm.jpg" alt="" /></a>
                      <div class="dropdown-menu dropdown-menu-end" aria-labelledby="statements"> <a class="dropdown-item" href="/my-profile">My Profile</a> <a class="dropdown-item" href="#">Logout</a> </div>
                    </div>
                  </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <section class="hero-wrap section">
    <div class="hero-mask opacity-9 bg-primary"></div>
    <div class="hero-bg" style={{backgroundImage: "assets/images/bg/image-2.jpg"}}></div>
    <div class="hero-content">
      <div class="container">
        <div class="row align-items-center text-center">
          <div class="col-12">
            <h1 class="text-11 text-white mb-4">How can we help you?</h1>
          </div>
          <div class="col-md-10 col-lg-8 col-xl-6 mx-auto">
            <div class="input-group">
              <input class="form-control shadow-none border-0" type="search" id="search-input" placeholder="Search for answer..." value="" />
              <span class="input-group-text bg-white border-0 p-0">
                <button class="btn text-muted shadow-none px-3 border-0" type="button"><i class="fa fa-search"></i></button>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="content">
    <section class="section bg-white">
      <div class="container">
        <h2 class="text-9 text-center">Popular Topics</h2>
        <p class="text-4 text-center mb-5">Lisque persius interesset his et, in quot quidam persequeris.</p>
        <div class="row">
          <div class="col-md-10 mx-auto">
            <div class="row gx-5">
              <div class="col-md-6">                
				<div class="accordion accordion-flush" id="popularTopics">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">I forgot the password for my account.</button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#popularTopics">
                      <div class="accordion-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">How do I withdraw funds from my account?</button>
                    </h2>
                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#popularTopics">
                      <div class="accordion-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading3">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">How do I link bank account to my account?</button>
                    </h2>
                    <div id="collapse3" class="collapse" aria-labelledby="heading3" data-bs-parent="#popularTopics">
                      <div class="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading4">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">How do I confirm the email address on my account?</button>
                    </h2>
                    <div id="collapse4" class="collapse" aria-labelledby="heading4" data-bs-parent="#popularTopics">
                      <div class="accordion-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading5">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">How do I receive payments? </button>
                    </h2>
                    <div id="collapse5" class="collapse" aria-labelledby="heading5" data-bs-parent="#popularTopics">
                      <div class="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="accordion accordion-flush" id="popularTopics2">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading6">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">How Can I View My Payments History?</button>
                    </h2>
                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#popularTopics2">
                      <div class="accordion-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading7">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">Where is my refund?</button>
                    </h2>
                    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#popularTopics2">
                      <div class="accordion-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading8">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">How do I request payments or send an invoice?</button>
                    </h2>
                    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#popularTopics2">
                      <div class="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading9">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">Forgot my password! What next?</button>
                    </h2>
                    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#popularTopics2">
                      <div class="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading10">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">Closing Your Account</button>
                    </h2>
                    <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#popularTopics2">
                      <div class="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5"><a href="#" class="btn-link text-4">See more topics<i class="fas fa-chevron-right text-2 ms-2"></i></a></div>
      </div>
    </section>
    <section class="section py-4 my-4 py-sm-5 my-sm-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
              <div class="row g-0">
                <div class="col-12 col-sm-auto text-13 text-light d-flex align-items-center justify-content-center"> <span class="px-4 ms-3 me-2 mb-4 mb-sm-0"><i class="far fa-envelope"></i></span> </div>
                <div class="col text-center text-sm-start">
                  <div class="">
                    <h5 class="text-3 text-body">Can't find what you're looking for?</h5>
                    <p class="text-muted mb-0">We want to answer all of your queries. Get in touch and we'll get back to you as soon as we can. <a class="btn-link" href="">Contact us<span class="text-1 ms-1"><i class="fas fa-chevron-right"></i></span></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
              <div class="row g-0">
                <div class="col-12 col-sm-auto text-13 text-light d-flex align-items-center justify-content-center"> <span class="px-4 ms-3 me-2 mb-4 mb-sm-0"><i class="far fa-comment-alt"></i></span> </div>
                <div class="col text-center text-sm-start">
                  <div class="">
                    <h5 class="text-3 text-body">Technical questions</h5>
                    <p class="text-muted mb-0">Have some technical questions? Hit us up on live chat or whatever. <a class="btn-link" href="">Click here<span class="text-1 ms-1"><i class="fas fa-chevron-right"></i></span></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
</div>
<a id="back-to-top" data-bs-toggle="tooltip" title="Back to Top" href="javascript:void(0)"><i class="fa fa-chevron-up"></i></a> 
            </div>
        )
    }
}

export default Help