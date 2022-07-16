import React, {Component} from "react";


class Dashboard extends Component {
    render(){
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
  {/* <!-- Header
  ============================================= --> */}
  <header id="header">
    <div className="container">
      <div className="header-row">
        <div className="header-column justify-content-start"> 
          
          <div className="logo me-3"> <a className="d-flex" href="/#" title="Payyed - HTML Template"><img src="assets/images/logo.png" alt="Payyed" /></a> </div>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
          
          <nav className="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="active"><a href="/dashboard">Dashboard</a></li>
                <li><a href="/transactions">Transactions</a></li>
                <li><a href="/send-money">Send/Request</a></li>
                <li><a href="/help">Help</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header-column justify-content-end"> 
          <nav className="login-signup navbar navbar-expand">
          <div className="col-auto d-flex align-items-center ms-auto">
                    <div className="dropdown"> <a className="text-muted btn-link" href="/#" role="button" id="statements" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="rounded-circle" src="assets/images/profile-thumb-sm.jpg" alt="" /></a>
                      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="statements"> <a className="dropdown-item" href="/#">My Profile</a> <a className="dropdown-item" href="/login"onClick={() =>{ localStorage.removeItem('data') } }>Logout</a> </div>
                    </div>
                  </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* <!-- Header End --> */}
  {/* <!-- Content
  ============================================= --> */}
  <div id="content" className="py-4">
    <div className="container">
      <div className="row"> 
        {/* <!-- Left Panel
        ============================================= --> */}
        {/* <aside className="col-lg-3">  */}
          {/* <!-- Profile Details
          =============================== --> */}
          {/* <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div className="profile-thumb mt-3 mb-4"> <img className="rounded-circle" src="assets/images/profile-thumb.jpg" alt="" />
              <div className="profile-thumb-edit bg-primary text-white" data-bs-toggle="tooltip" title="Change Profile Picture"> <i className="fas fa-camera position-absolute"></i>
                <input type="file" className="custom-file-input" id="customFile" />
              </div>
            </div>
            <p className="text-3 fw-500 mb-2">Hello, Smith Rhodes</p>
            <p className="mb-2"><a href="#" className="text-5 text-light" data-bs-toggle="tooltip" title="Edit Profile"><i className="fas fa-edit"></i></a></p>
          </div> */}
          {/* <!-- Profile Details End -->  */}
          {/* <!-- Available Balance
          =============================== --> */}
          {/* <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className="fas fa-wallet"></i></div>
            <h3 className="text-9 fw-400">$2956.00</h3>
            <p className="mb-2 text-muted opacity-8">Available Balance</p>
            <hr className="mx-n3" />
            <div className="d-flex"><a href="#" className="btn-link me-auto">Withdraw</a> <a href="#" className="btn-link ms-auto">Deposit</a></div>
          </div> */}
          {/* <!-- Available Balance End -->  */}
          {/* <!-- Need Help?
          =============================== --> */}
          {/* <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className="fas fa-comments"></i></div>
            <h3 className="text-5 fw-400 my-4">Need Help?</h3>
            <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br />
              Our experts are here to help!.</p>
            <div className="d-grid"><a href="#" className="btn btn-primary">Chate with Us</a></div>
		   </div> */}
          {/* <!-- Need Help? End -->  */}
        {/* </aside> */}
        {/* <!-- Left Panel End --> */}
        {/* <!-- Middle Panel
        ============================================= --> */}
        <div className="col-lg-16"> 
          {/* <!-- Profile Completeness
          =============================== --> */}
          <div className="bg-white shadow-sm rounded p-4 mb-4">
            <h3 className="text-5 fw-400 d-flex align-items-center mb-4">Profile Completeness<span className="border text-success rounded-pill fw-500 text-2 px-3 py-1 ms-2">50%</span></h3>
            <hr className="mb-4 mx-n4" />
            <div className="row gy-4 profile-completeness">
               <div className="col-sm-6 col-md-3">
                {/* <!-- Profile Details
          =============================== --> */}
          <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div className="profile-thumb mt-3 mb-4"> <img className="rounded-circle" src="assets/images/profile-thumb.jpg" alt="" />
              <div className="profile-thumb-edit bg-primary text-white" data-bs-toggle="tooltip" title="Change Profile Picture"> <i className="fas fa-camera position-absolute"></i>
                <input type="file" className="custom-file-input" id="customFile" />
              </div>
            </div>
            <p className="text-3 fw-500 mb-2">Hello, Smith Rhodes</p>
            <p className="mb-2"><a href="/#" className="text-5 text-light" data-bs-toggle="tooltip" title="Edit Profile"><i className="fas fa-edit"></i></a></p>
          </div>
              </div> 
              <div className="col-sm-6 col-md-3">
                {/* <!-- Available Balance
          =============================== --> */}
          <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className="fas fa-wallet"></i></div>
            <h3 className="text-9 fw-400">$2956.00</h3>
            <p className="mb-2 text-muted opacity-8">Available Balance</p>
            <hr className="mx-n3" />
            <div className="d-flex"><a href="/#" className="btn-link me-auto">Withdraw</a> <a href="/#" className="btn-link ms-auto">Deposit</a></div>
          </div>
          {/* <!-- Available Balance End -->  */}
              </div>
              <div className="col-sm-6 col-md-3">
               {/* <!-- Need Help?
          =============================== --> */}
          <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className="fas fa-comments"></i></div>
            <h3 className="text-5 fw-400 my-4">Need Help?</h3>
            <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br />
              Our experts are here to help!.</p>
            <div className="d-grid"><a href="/#" className="btn btn-primary">Chat with Us</a></div>
		  </div>
          {/* <!-- Need Help? End -->  */}
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="position-relative border rounded text-center px-3 py-4"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-university"></i></span> <span className="text-5 d-block text-light mt-4 mb-3"><i className="far fa-circle "></i></span>
                  <p className="mb-0"><a className="btn-link stretched-link" href="/#">Add Bank Account</a></p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Profile Completeness End -->  */}
          {/* <!-- Recent Activity
          =============================== --> */}
          <div className="bg-white shadow-sm rounded py-4 mb-4">
            <h3 className="text-5 fw-400 d-flex align-items-center px-4 mb-4">Recent Activity</h3>
            {/* <!-- Title
            =============================== --> */}
            <div className="transaction-title py-2 px-4">
              <div className="row fw-00">
                <div className="col-2 col-sm-1 text-center"><span className="">Date</span></div>
                <div className="col col-sm-7">Description</div>
                <div className="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
                <div className="col-3 col-sm-2 text-end">Amount</div>
              </div>
            </div>
            {/* <!-- Title End -->  */}
            {/* <!-- Transaction List
            =============================== --> */}
            <div className="transaction-list">
              <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">16</span> <span className="d-block text-1 fw-300 text-uppercase">APR</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-warning" data-bs-toggle="tooltip" title="In Progress"><i className="fas fa-ellipsis-h"></i></span> </div>
                  <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $562</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">15</span> <span className="d-block text-1 fw-300 text-uppercase">APR</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">Envato Pty Ltd</span> <span className="text-muted">Payment Received</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">+ $562</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">04</span> <span className="d-block text-1 fw-300 text-uppercase">APR</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $106</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">28</span> <span className="d-block text-1 fw-300 text-uppercase">MAR</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">Patrick Cary</span> <span className="text-muted">Refund</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">+ $60</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">28</span> <span className="d-block text-1 fw-300 text-uppercase">MAR</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">Patrick Cary</span> <span className="text-muted">Payment Sent</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-danger" data-bs-toggle="tooltip" title="Cancelled"><i className="fas fa-times-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $60</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">16</span> <span className="d-block text-1 fw-300 text-uppercase">FEB</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $1498</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">15</span> <span className="d-block text-1 fw-300 text-uppercase">FEB</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">Envato Pty Ltd</span> <span className="text-muted">Payment Received</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">+ $1498</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
            </div>
            {/* <!-- Transaction List End -->  */}
            {/* <!-- Transaction Item Details Modal
            =========================================== --> */}
            <div id="transaction-detail" className="modal fade" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered transaction-details" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="row g-0">
                      <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-start py-4">
                        <div className="my-auto text-center">
                          <div className="text-17 text-white my-3"><i className="fas fa-building"></i></div>
                          <h3 className="text-4 text-white fw-400 my-3">Envato Pty Ltd</h3>
                          <div className="text-8 fw-500 text-white my-4">$557.20</div>
                          <p className="text-white">15 March 2021</p>
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <h5 className="text-5 fw-400 m-3">Transaction Details
                          <button type="button" className="btn-close text-2 float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                        </h5>
                        <hr />
                        <div className="px-3">
                          <ul className="list-unstyled">
                            <li className="mb-2">Payment Amount <span className="float-end text-3">$562.00</span></li>
                            <li className="mb-2">Fee <span className="float-end text-3">-$4.80</span></li>
                          </ul>
                          <hr className="mb-2" />
                          <p className="d-flex align-items-center fw-500 mb-0">Total Amount <span className="text-3 ms-auto">$557.20</span></p>
						  <hr className="mb-4 mt-2" />
                          <ul className="list-unstyled">
                            <li className="fw-500">Paid By:</li>
                            <li className="text-muted">Envato Pty Ltd</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="fw-500">Transaction ID:</li>
                            <li className="text-muted">26566689645685976589</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="fw-500">Description:</li>
                            <li className="text-muted">Envato March 2021 Member Payment</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="fw-500">Status:</li>
                            <li className="text-muted">Completed<span className="text-success text-3 ms-1"><i className="fas fa-check-circle"></i></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Transaction Item Details Modal End -->  */}
            {/* <!-- View all Link
            =============================== --> */}
            <div className="text-center mt-4"><a href="/#" className="btn-link text-3">View all<i className="fas fa-chevron-right text-2 ms-2"></i></a></div>
            {/* <!-- View all Link End -->  */}
          </div>
          {/* <!-- Recent Activity End -->  */}
        </div>
        {/* <!-- Middle Panel End -->  */}
      </div>
    </div>
  </div>
  {/* <!-- Content end -->  */}
  {/* <!-- Footer
  ============================================= --> */}
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg d-lg-flex align-items-center">
          <ul className="nav justify-content-center justify-content-lg-start text-3">
            <li className="nav-item"> <a className="nav-link active" href="/#">About Us</a></li>
            <li className="nav-item"> <a className="nav-link" href="/#">Support</a></li>
            <li className="nav-item"> <a className="nav-link" href="/#">Help</a></li>
            
          </ul>
        </div>
        <div className="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
          <ul className="social-icons justify-content-center">
            <li className="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
            <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
            <li className="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
            <li className="social-icons-youtube"><a data-bs-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright pt-3 pt-lg-2 mt-2">
        <div className="row">
          <div className="col-lg">
            <p className="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a href="/#">Payyed</a>. All Rights Reserved.</p>
          </div>
          <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
            <ul className="nav justify-content-center">
              <li className="nav-item"> <a className="nav-link active" href="/#">Security</a></li>
              <li className="nav-item"> <a className="nav-link" href="/#">Terms</a></li>
              <li className="nav-item"> <a className="nav-link" href="/#">Privacy</a></li>
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
<a id="back-to-top" data-bs-toggle="tooltip" title="Back to Top" href="/#"><i className="fa fa-chevron-up"></i></a> 

{/* <!-- Script -->  */}
<script src="/assets/vendor/jquery/jquery.min.js"></script> 
<script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> 
{/* <!-- Style Switcher -->  */}
<script src="/assets/js/switcher.min.js"></script> 
<script src="/assets/js/theme.js"></script>

            </div>
        )
    }
}
export default Dashboard