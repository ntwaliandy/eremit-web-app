
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Otp() {
let navigate = useNavigate();  
const [email, setEmail] = useState("");
const [otp, setOtp] = useState("");
const [message, setMessage] = useState(""); 

let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await fetch("http://127.0.0.1:9000/verify_otp", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        otp: otp,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(results => results.json())
    .then((response) => {
      console.log(response)
      const  data = {
        "token": response.token,
        "user_id": response.data[0].user_id
       }
       const dataData = JSON.stringify(data)
       localStorage.setItem('data', dataData)
    
    if (response.status === 100) {
      navigate("/dashboard",{replace: true});
      
    } else {
      setMessage(response.message)
  
    }
    })
  } catch (err) {
    console.log(err);
  }
};
 
   
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
                <h1 className="text-11 text-white mb-4">Get Verified! with your otp from here</h1>
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
              <h3 className="fw-400 mb-4">verify otp</h3>
              <form id="loginForm" onSubmit={handleSubmit}>

              <div className="mb-3">
                  <label for="emailAddress" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="emailAddress" name="email" value={email} required placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label for="Otp" className="form-label">otp verification</label>
                  <input type="text" className="form-control" id="Otp" name="otp" value={otp} required placeholder="Enter Your OTP from here" onChange={(e) => setOtp(e.target.value)} />
                </div>

               
                <div className="d-grid mt-4 mb-3"><button className="btn btn-primary" type="submit"> verify otp</button></div>
                <div className="message">{message ? <p>{message}</p> : null}</div>
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

{/* <!-- Script -->  */}
<script src="assets/vendor/jquery/jquery.min.js"></script> 
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> 
{/* <!-- Style Switcher -->  */}
<script src="assets/js/switcher.min.js"></script> 
<script src="assets/js/theme.js"></script>
</div>
        );
    }

export default Otp;  