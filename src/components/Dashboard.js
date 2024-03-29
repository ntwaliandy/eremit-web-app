import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Dashboard extends Component {
  state = {
    wallets: [],
    allCuurencies: [],
    currency_code: "",
    isLoading: false,
    TofullName: "",
    FromfullName: "",
    assetCode: "",
    assetIssuer: "",
  }
  componentDidMount() {
    this.initState()

  }

  initState() {
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
      this.setState({ wallets: res.message });
    });
  }

curencySubmit = e => {
  this.setState({ isLoading: true })
  e.preventDefault()
  const temp = localStorage.getItem("data")
  const loadedData = JSON.parse(temp)
  const bodyData = {
    "user_id": loadedData.user_id,
    "asset_code": this.state.assetCode,
    "asset_issuer": this.state.assetIssuer
  }
  const requiredOp = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
  }

  fetch("http://18.176.147.191:8500/add_asset", requiredOp)
    .then((response) => response.json())
    .then(personDetail => {
      console.log(personDetail)
      this.setState({ isLoading: false })
      toast(personDetail.message)
      this.initState()
    });

}


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
    <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start"> 
          
          <div class="logo me-3"> <a class="d-flex" href="/eremit/#/dashboard" title="eRemit - HTML Template"><img src="assets/images/logo7.png" width="121" height="70" alt="eRemit" /></a> </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
          
          <nav class="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto">
                <li class="active"><a href="/eremit/#/dashboard">Dashboard</a></li>
                <li><a href="/eremit/#/send-money">Send</a></li>
                <li><a href="/eremit/#/deposit">Deposit/Withdraw</a></li>
                <li><a href="/eremit/#/help">Help</a></li>
                {/* <li><a href="#edit-email" data-bs-toggle="modal" class="ms-auto text-2 text-uppercase btn-link">Create New Wallet</a></li> */}
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
  {/* <!-- Header End --> */}
  <ToastContainer />
  {/* <!-- Content
  ============================================= --> */}
  <div id="content" class="py-4">
    <div class="container">
      <div class="row">
        {/* <!-- Middle Panel
        ============================================= --> */}
        <div class="col-lg-16"> 
          {/* <!-- Profile Completeness
          =============================== --> */}
          <div class="bg-white shadow-sm rounded p-4 mb-4">
            <h3 class="text-5 fw-400 d-flex align-items-center mb-4">All Asset Details</h3>
            <hr class="mb-4 mx-n4" />
            <div class="row gy-4 profile-completeness">
              {
                this.state.wallets.length > 0 ? this.state.wallets.map((pr, i) => (
                  <div class="col-sm-6 col-md-3" key={i}>
                <div class="border rounded text-center px-3 py-4"> <span class="d-block text-5 text-light mt-2 mb-3">{pr.asset_type == "native" ? "XLM" : pr.asset_code } Asset</span> <span class="text-3 d-block text-success mt-4 mb-3">{pr.balance} {pr.asset_type == "native" ? "XLM" : pr.asset_code }</span>
                   <Link to="/transactions" state=""><p class="mb-0">View Transactions</p></Link>
                </div>
              </div>
                )) :
                <p></p>
              }
            <div class="col-sm-6 col-md-3"> <a href="#edit-email" data-bs-toggle="modal" class="ms-auto text-2 text-uppercase btn-link">
            <div class="featured-box style-5 rounded">
              <div class="featured-box-icon text-primary"> <i class="fas fa-wallet"></i></div>
              <h3>Add Asset</h3>
            </div>
            </a> </div> 
            </div>
          </div>
          {/* <!-- Profile Completeness End -->  */}
          <div id="edit-email" class="modal fade" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title fw-400">Fill in the form</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div class="modal-body p-4">
                      <form id="emailAddresses" onSubmit={this.curencySubmit}>
                      <div class="mb-3">
                        <label for="existingPassword" class="form-label">Asset Code</label>
                        <input type="text" class="form-control" value={this.state.assetCode} name="asset_code" data-bv-field="existingpassword" id="existingPassword" required="" placeholder="Enter Asset Code" onChange={(e) => this.setState({ assetCode: e.target.value })} />
                      </div>
                      <div class="mb-3">
                        <label for="existingPassword" class="form-label">Asset Issuer</label>
                        <input type="text" class="form-control" value={this.state.assetIssuer} name="asset_issuer" data-bv-field="existingpassword" id="existingPassword" required="" placeholder="Enter Asset Issuer" onChange={(e) => this.setState({ assetIssuer: e.target.value })} />
                      </div>
                    <div class="d-grid mt-4">
                      { 
                        this.state.isLoading ? <button class="btn btn-primary"><Spinner animation="border" variant="light" /></button> : <button class="btn btn-primary">Create</button>
                      }
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Recent Activity
          =============================== --> */}
          <div class="bg-white shadow-sm rounded py-4 mb-4">
            <h3 class="text-5 fw-400 d-flex align-items-center px-4 mb-4">Recent Activity</h3>
            {/* <!-- Title
            =============================== --> */}
            <div class="transaction-title py-2 px-4">
              <div class="row fw-00">
                <div class="col-2 col-sm-3"><span class="">Date</span></div>
                <div class="col col-sm-2">Description</div>
                <div class="col-auto col-sm-3 d-none d-sm-block">Account</div>
                <div class="col-auto col-sm-2 d-none d-sm-block">Status</div>
                <div class="col-3 col-sm-1 text-end">Amount</div>
              </div>
            </div>
            {/* <!-- Title End -->  */}
            {/* <!-- Transaction List
            =============================== --> */}
            <div class="transaction-list"> 
            


  <div class="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="">
                    <div class="row align-items-center flex-row">
                      <div class="col-2 col-sm-3"> <p>""</p> </div>
                      <div class="col col-sm-2">  <span class="text-muted">""</span> </div>
                      <div class="col-auto col-sm-3 d-none d-sm-block">  
                      <span class="text-muted"></span>
                      </div>
                      <div class="col-auto col-sm-2 d-none d-sm-block text-3"> <span class="text-danger" data-bs-toggle="tooltip" title="In Progress"><i class="fas fa-check-circle"></i> </span>sent </div>
                      <div class="col-3 col-sm-1 text-end text-4"> <span class="text-nowrap"></span> <span class="text-2 text-uppercase">""</span> </div>
                    </div>
                  </div>
                  <div id="" class="modal fade" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered transaction-details" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="row g-0">
                      <div class="col-sm-5 d-flex justify-content-center bg-primary rounded-start py-4">
                        <div class="my-auto text-center">
                          <div class="text-17 text-white my-3"><i class="fas fa-building"></i></div>
                          <h3 class="text-4 text-white fw-400 my-3">EREMIT Ltd</h3>
                          <div class="text-8 fw-500 text-white my-4">""</div>
                          <p class="text-white">""</p>
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <h5 class="text-5 fw-400 m-3">Transaction Details
                          <button type="button" class="btn-close text-2 float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                        </h5>
                        <hr />
                        <div class="px-3">
                          <ul class="list-unstyled">
                            <li class="mb-2">Payment Amount <span class="float-end text-3">""</span></li>
                            <li class="mb-2">Fee <span class="float-end text-3">""</span></li>
                          </ul>
                          <hr class="mb-2" />
                          <p class="d-flex align-items-center fw-500 mb-0">Total Amount <span class="text-3 ms-auto">"" </span></p>
						  <hr class="mb-4 mt-2" />
                          <ul class="list-unstyled">
                            <li class="fw-500">Sent To:</li>
                            <li class="text-muted">""</li>
                          </ul>
                          <ul class="list-unstyled">
                            <li class="fw-500">Transaction ID</li>
                            <li class="text-muted">""</li>
                          </ul>
                          <ul class="list-unstyled">
                            <li class="fw-500">Description</li>
                            <li class="text-muted">""</li>
                          </ul>
                          <ul class="list-unstyled">
                            <li class="fw-500">Status</li>
                            <li class="text-muted">Completed<span class="text-success text-3 ms-1"><i class="fas fa-check-circle"></i></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            </div>
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
    <div class="container">
      <div class="row">
        <div class="col-lg d-lg-flex align-items-center">
          <ul class="nav justify-content-center justify-content-lg-start text-3">
            <li class="nav-item"> <a class="nav-link active" href="#">About Us</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Support</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Help</a></li>
            
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