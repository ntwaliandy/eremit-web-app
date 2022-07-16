import { data, timers } from "jquery";
import React, { Component,  } from "react";
import { Navigate } from "react-router-dom";


class Login extends Component {

  state = {
    email: "",
    password: "",
    message: "",
    data: ""
    // message: [],
    // status: ""
    
  }
  
  changedData = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      ...this.state
      [name] = value
    })
  
  }
  
  submitData = e => {
    e.preventDefault()
    const url = "http://127.0.0.1:8000/login_user"
    const bodyData = {
      "password": this.state.password,
      "email": this.state.email
     
    }
    const headerData = {
      "Content-Type": "application/json"
    }
  
    const requestOptions = {
      method: "POST",
      headers: headerData,
      body: JSON.stringify(bodyData)
    }
  
    fetch(url, requestOptions)
    .then(results => results.json())
    .then((response) => {
      console.log(response)

      data = {
        "token": response.token,
        "user_id": response.data[0].user_id
      }
      const dataData = JSON.stringify(data)
      localStorage.setItem('data', dataData)
      this.setState({
       
        message: response.status
      })
    })
    if (this.state.message === 100) {
      this.setState({
        
        // data: useNavigate("/dashboard")
        data: <Navigate to="/dashboard" replace={true} />
        
      })
      return this.state.data
    } else if (this.state.message === 403) {
      this.setState({
        data: "invalid credentials"
      })
      return this.state.data
    } else {
      this.setState({
        data: ""
      })
    }
  }
    render () {
        return (
            <div>
                {/* <!-- Preloader --> */}
{/* <div id="preloader">
  <div data-loader="dual-ring"></div>
</div> */}
{/* <!-- Preloader End --> */}
<div id="main-wrapper">
  <div className="container-fluid px-0">
    <div className="row g-0 min-vh-100"> 
      {/* <!-- Welcome Text
      ============================================= --> */}
      <div className="col-md-6">
        <div className="hero-wrap d-flex align-items-center h-100">
          <div className="hero-mask opacity-8 bg-primary"></div>
          <div className="hero-bg hero-bg-scroll" style={{ backgroundImage: "url(/assets/images/bg/image-3.jpg)" }}></div>
          <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
            <div className="row g-0">
              <div className="col-10 col-lg-9 mx-auto">
                <div className="logo mt-5 mb-5 mb-md-0"> <a className="d-flex" href="/" title="Payyed - HTML Template"><img src="assets/images/logo-light.png" alt="Payyed" /></a> </div>
              </div>
            </div>
            <div className="row g-0 my-auto">
              <div className="col-10 col-lg-9 mx-auto">
                <h1 className="text-11 text-white mb-4">Welcome back!</h1>
                <p className="text-4 text-white lh-base mb-5">We are glad to see you again! Instant deposits, withdrawals & payouts trusted by millions worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Welcome Text End -->  */}
      {/* <!-- Login Form
      ============================================= --> */}
      <div className="col-md-6 d-flex align-items-center">
        <div className="container my-4">
          <div className="row g-0">
            <div className="col-11 col-lg-9 col-xl-8 mx-auto">
              <h3 className="fw-400 mb-4">Log In</h3>
              <form id="loginForm" onSubmit={this.submitData}>
              <div className="mb-3">
                  <label for="emailAddress" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="emailAddress" name="email" required placeholder="Enter Your Email" value={this.state.email} onChange={this.changedData} />
                </div>
                <div className="mb-3">
                  <label for="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" name="password" required placeholder="Enter Password" value={this.state.password} onChange={this.changedData} />
                </div>
                <div className="row mb-3">
                  <div className="col-sm">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" id="remember-me" name="remember" type="checkbox" />
                      <label className="form-check-label" for="remember-me">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-sm text-end"><a className="btn-link" href="/#">Forgot Password ?</a></div>
                </div> 
                <p>{this.state.data}</p>
                <div className="d-grid mb-3"><button className="btn btn-primary" type="submit" href="/" onClick={this.submitData}> Login</button>  </div>
              </form>
              <p className="text-3 text-center text-muted">Don't have an account? <a className="btn-link" href="/dashboard">Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Login Form End -->  */}
    </div>
  </div>
</div>
{/* <!-- Back to Top
============================================= -->  */}
<a id="back-to-top" data-bs-toggle="tooltip" title="Back to Top" href="/#"><i className="fa fa-chevron-up"></i></a> 

{/* <!-- Script -->  */}
<script src="assets/vendor/jquery/jquery.min.js"></script> 
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> 
{/* <!-- Style Switcher -->  */}
<script src="assets/js/switcher.min.js"></script> 
<script src="assets/js/theme.js"></script>

            </div>
        )
    }
}
export default Login