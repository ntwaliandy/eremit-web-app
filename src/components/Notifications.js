import React, { Component } from "react";

class Notifications extends Component {
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
                <li class="active"><a href="/send-money">Send/Request</a></li>
                <li><a href="/help">Help</a></li>
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
  

  <div class="bg-primary">
    <div class="container d-flex justify-content-center">
      <ul class="nav nav-pills alternate nav-lg border-bottom-0">
        <li class="nav-item"> <a class="nav-link" href="/my-profile">Account</a></li>
        <li class="nav-item"> <a class="nav-link" href="/security">Security</a></li>
        <li class="nav-item"> <a class="nav-link" href="/payment-methods">Payment Methods</a></li>
        <li class="nav-item"> <a class="nav-link active" href="/notifications">Notifications</a></li>
      </ul>
    </div>
  </div>
  <div id="content" class="py-4">
    <div class="container">
      <div class="row"> 
        <aside class="col-lg-3"> 
          
          <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div class="profile-thumb mt-3 mb-4"> <img class="rounded-circle" src="assets/images/profile-thumb.jpg" alt="" />
              <div class="profile-thumb-edit bg-primary text-white" data-bs-toggle="tooltip" title="Change Profile Picture"> <i class="fas fa-camera position-absolute"></i>
                <input type="file" class="custom-file-input" id="customFile" />
              </div>
            </div>
            <p class="text-3 fw-500 mb-2">Hello, Smith Rhodes</p>
            <p class="mb-2"><a href="/my-profile" class="text-5 text-light" data-bs-toggle="tooltip" title="Edit Profile"><i class="fas fa-edit"></i></a></p>
          </div>
          <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div class="text-17 text-light my-3"><i class="fas fa-wallet"></i></div>
            <h3 class="text-9 fw-400">$2956.00</h3>
            <p class="mb-2 text-muted opacity-8">Available Balance</p>
            <hr class="mx-n3" />
            <div class="d-flex"><a href="withdraw-money.html" class="btn-link me-auto">Withdraw</a> <a href="deposit-money.html" class="btn-link ms-auto">Deposit</a></div>
          </div>
          <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div class="text-17 text-light my-3"><i class="fas fa-comments"></i></div>
            <h3 class="text-5 fw-400 my-4">Need Help?</h3>
            <p class="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br />
              Our experts are here to help!.</p>
            <div class="d-grid"><a href="#" class="btn btn-primary">Chate with Us</a></div>
		  </div>
        </aside>
        <div class="col-lg-9"> 
          
          <div class="bg-white shadow-sm rounded p-4 mb-4">
            <h3 class="text-5 fw-400">Notifications</h3>
            <p class="text-muted">Select subscriptions to be delivered to <span class="text-body">smithrhodes1982@gmail.com</span></p>
            <hr class="mx-n4" />
            <form id="notifications" method="post">
              <div class="form-check form-check-inline">
                <input class="form-check-input" id="announcements" name="notifications" type="checkbox" />
                <label class="form-check-label text-3" for="announcements">Announcements</label>
                <p class="text-muted lh-base mt-2 mb-0">Be the first to know about new features and other news.</p>
              </div>
              <hr class="mx-n4" />
              <div class="form-check form-check-inline">
                <input class="form-check-input" id="sendPayment" name="notifications" type="checkbox" />
                <label class="form-check-label text-3" for="sendPayment">Send payment</label>
                <p class="text-muted lh-base mt-2 mb-0">Send an email when I send a payment.</p>
              </div>
              <hr class="mx-n4" />
              <div class="form-check form-check-inline">
                <input class="form-check-input" id="receiveApayment" name="notifications" type="checkbox" />
                <label class="form-check-label text-3" for="receiveApayment">Receive a payment</label>
                <p class="text-muted lh-base mt-2 mb-0">Send me an email when I receive a payment.</p>
              </div>
              <hr class="mx-n4" />
              <div class="form-check form-check-inline">
                <input class="form-check-input" id="requestPayment" name="notifications" type="checkbox" />
                <label class="form-check-label text-3" for="requestPayment">Request payment</label>
                <p class="text-muted lh-base mt-2 mb-0">Send me an email when i request payment.</p>
              </div>
              <hr class="mx-n4" />
              <div class="form-check form-check-inline">
                <input class="form-check-input" id="problemWithPayment" name="notifications" type="checkbox" />
                <label class="form-check-label text-3" for="problemWithPayment">Have a problem with a payment</label>
                <p class="text-muted lh-base mt-2 mb-0">Send me an email when have a problem with a payment.</p>
              </div>
              <hr class="mx-n4" />
              <div class="form-check form-check-inline">
                <input class="form-check-input" id="specialOffers" name="notifications" type="checkbox" />
                <label class="form-check-label text-3" for="specialOffers">Special Offers</label>
                <p class="text-muted lh-base mt-2 mb-0">Receive last-minute offers from us.</p>
              </div>
              <hr class="mx-n4" />
              <div class="form-check form-check-inline">
                <input class="form-check-input" id="reviewSurveys" name="notifications" type="checkbox" />
                <label class="form-check-label text-3" for="reviewSurveys">Review Surveys</label>
                <p class="text-muted lh-base mt-2 mb-0">Share your payment experience to better inform users.</p>
              </div>
              <hr class="mx-n4" />
              <button class="btn btn-primary mt-1" type="submit">Save Changes</button>
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

            </div>
        )
    }
}

export default Notifications;