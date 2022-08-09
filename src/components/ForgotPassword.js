
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-bootstrap";


function ForgotPassword() {
let navigate = useNavigate();  
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [isLoading, SetLoading] = useState(false);

let handleSubmit = async (e) => {
  SetLoading(true)
  e.preventDefault();
  
  try {
    await fetch("http://18.116.9.199:9000/forgot_password", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(results => results.json())
    .then((response) => {
      console.log(response)
    
    if (response.status === 100) {
      SetLoading(true)
      navigate("/password_otp", {state: {"email": email}});
      
    } else {
      SetLoading(false)
      toast(response.message)
    
  
    }
    })
  } catch (err) {
    console.log(err);
  }
};
 
   
        return (
<div>
  <ToastContainer />
{/* <!-- Content
  ============================================= --> */}
  <div id="content">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-5 mx-auto">
          <div class="bg-white shadow-md rounded p-3 pt-sm-4 pb-sm-5 px-sm-5">
            <h3 class="fw-400 text-center mb-4">Recover your password</h3>
            <hr class="mx-n3 mx-sm-n5" />
            <p class="lead text-center">you can request a password reset below.
            we will send you security code to your email address, please make sure it is 
            correct
            </p>
            <form id="loginForm" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="emailAddress" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="emailAddress" required="" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}  />
              </div>
              
                
              <div className="d-grid mb-3">
                  { 
                    isLoading ? <button class="btn btn-primary"><Spinner animation="border" variant="light" /></button> : <button class="btn btn-primary">Request Password Reset</button>
                  }
              </div>
              
            </form>
            <p class="text-3 text-muted text-center mb-0">remembered your password? <a class="btn-link" href="/eremit/#/login">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Content end -->  */}

</div>
        );
    }

export default ForgotPassword;