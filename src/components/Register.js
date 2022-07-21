import { data, timers } from "jquery";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";



class Register extends Component {

    state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      pass: "",
      prof: "",
      message: "",
      data: ""
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
      const url = "http://18.116.9.199:9000/add_user"
      const bodyData = {
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
        "email": this.state.email,
        "phone_number": this.state.phone,
        "password": this.state.pass,
        "profile_pic": this.state.prof
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
        console.log(response.status)
        this.setState({
          message: response.status
        })
      })
      if (this.state.message === 100) {
        this.setState({
          // data: useNavigate("/dashboard")
          data: <Navigate to="/otp" replace={true} />
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

    render() {
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
      <div className="col-md-6"> 
        {/* <!-- Get Verified! Text
        ============================================= --> */}
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
                <h1 className="text-11 text-white mb-4">Get Verified!</h1>
                <p className="text-4 text-white lh-base mb-5">Every day, Payyed makes thousands of customers happy.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Get Verified! Text End -->  */}
      </div>
      <div className="col-md-6 d-flex align-items-center"> 
        {/* <!-- SignUp Form
        ============================================= --> */}
        <div className="container my-4">
          <div className="row g-0">
            <div className="col-11 col-lg-9 col-xl-8 mx-auto">
              <h3 className="fw-400 mb-4">Sign Up</h3>
              <form id="loginForm" onSubmit={this.submitData}>
                <div className="mb-3">
                  <label for="firstName" className="form-label">firstName</label>
                  <input type="text" className="form-control" id="firstName" name="first_name" value={this.state.first_name} required placeholder="Enter Your Name" onChange={this.changedData} />
                </div>

                <div className="mb-3">
                  <label for="lastName" className="form-label">last Name</label>
                  <input type="text" className="form-control" id="lastName" name="last_name" value={this.state.last_name} required placeholder="Enter Your last Name" onChange={this.changedData} />
                </div>

                <div className="mb-3">
                  <label for="telephoneNumber" className="form-label">phone number</label>
                  <input type="text" className="form-control" id="telephoneNumber" name="phone" value={this.state.phone} required placeholder="Enter Your phone number" onChange={this.changedData} />
                </div>

                <div className="mb-3">
                  <label for="emailAddress" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="emailAddress" name="email" value={this.state.email} required placeholder="Enter Your Email" onChange={this.changedData} />
                </div> 
                <div className="mb-3">
                  <label for="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" name="pass" value={this.state.pass} required placeholder="Enter Password" onChange={this.changedData} />
                </div>

                <div className="mb-3">
                  <label for="profilePicture" className="form-label">profile pic</label>
                  <input type="text" className="form-control" id="profilePicture" name="prof" value={this.state.prof} required placeholder="Enter Your phone number" onChange={this.changedData} />
                </div>
                <p>{this.state.data}</p>
                <div className="d-grid mt-4 mb-3"><button className="btn btn-primary" type="submit" onClick={this.submitData}> Sign Up</button></div>
              </form>
              <p className="text-3 text-center text-muted">Already have an account? <a className="btn-link" href="/login">Log In</a></p>
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
export default Register  