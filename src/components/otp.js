import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-bootstrap";


function Otp() {
let navigate = useNavigate();
const Location = useLocation();
const [email, setEmail] = useState("");
const [otp, setOtp] = useState("");
const [isLoading, SetLoading] = useState(false);

useEffect(() => (
console.log(Location)
))

let handleSubmit = async (e) => {
  SetLoading(true)
  e.preventDefault();
  try {
    await fetch("http://18.176.147.191:8500/verify_otp", {
      method: "POST",
      body: JSON.stringify({
        "email": Location.state.email,
        "otp": otp,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(results => results.json())
    .then((response) => {
      console.log(response)
    if (response.status === 100) {
      const  data = {
        "token": response.token,
        "user_id": response.data[0].user_id
       }
       const dataData = JSON.stringify(data)
       localStorage.setItem('data', dataData)
      SetLoading(false)
      navigate("/dashboard",{replace: true});
      
    } else if (response.status === 403){
      SetLoading(false)
      toast(response.message)
  
    } else {
      SetLoading(false)
      toast("technical error")
    }
    })
  } catch (err) {
    console.log(err);
  }
};
 
   
        return (
            <div>
              <ToastContainer />
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
                <div className="logo mt-5 mb-5 mb-md-0"> <a className="d-flex" href="/" title="Payyed - HTML Template"><img src="assets/images/logo2.png" alt="Payyed" /></a> </div>
              </div>
            </div>
            <div className="row g-0 my-auto">
              <div className="col-10 col-lg-9 mx-auto">
                <h1 className="text-11 text-white mb-4">Get Verified! enter the digit code sent to your email to proceed with registration</h1>
                <p className="text-4 text-white lh-base mb-5">Every day, eRemit makes thousands of customers happy.</p>
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
              <h3 className="fw-400 mb-4">verify otp</h3>
              <form id="loginForm" onSubmit={handleSubmit}>

              <div className="mb-3">
                  <label for="emailAddress" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="emailAddress" name="email" value={Location.state.email}  onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label for="Otp" className="form-label">otp verification</label>
                  <input type="text" className="form-control" id="Otp" name="otp" value={otp} required placeholder="Enter Your OTP from here" onChange={(e) => setOtp(e.target.value)} />
                </div>

               
                <div className="d-grid mt-4 mb-3">
                  { 
                    isLoading ? <button class="btn btn-primary"><Spinner animation="border" variant="light" /></button> : <button class="btn btn-primary">verify otp</button>
                  }
                </div>
              </form>
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


            </div>
        );
    }

export default Otp;