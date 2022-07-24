
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {
let navigate = useNavigate();  
const [email, setEmail] = useState("");
const [message, setMessage] = useState(""); 

let handleSubmit = async (e) => {
  e.preventDefault();
  e.stopPropagation()
  try {
    await fetch("http://127.0.0.1:9000/forgot_password", {
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
      navigate("/password_otp", {state: {"email": email}});
      
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
            we will snd you security code to your email address, please make sure it is 
            correct
            </p>
            <form id="loginForm" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="emailAddress" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="emailAddress" required="" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
              </div>
              
                
              <div class="d-grid mb-3"><button class="btn btn-primary" type="submit">request password reset</button></div>
              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
            <p class="text-3 text-muted text-center mb-0">remembered your password? <a class="btn-link" href="/login">Login</a></p>
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