
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PasswordCode() {
let navigate = useNavigate();
const Location = useLocation()
const [email, setEmail] = useState()
const [otp, setOtp] = useState("");
const [message, setMessage] = useState(""); 

useEffect(() => (
  console.log(Location)
))


let handleSubmit = async (e) => {
  e.preventDefault();
  e.stopPropagation()
  try {
    await fetch("http://18.116.9.199:9000/password_otp", {
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
      navigate("/setting_password",{state: {"email":Location.state.email}});
      
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
            <h3 class="fw-400 text-center mb-4">Security code to reset password</h3>
            <hr class="mx-n3 mx-sm-n5" />
            <p class="lead text-center">Insert the security code sent to your email
            inorder to proceed with the password reset
            </p>
            <form id="loginForm" onSubmit={handleSubmit}>
            <div className="mb-3">
                  <label for="Otp" className="form-label">otp verification</label>
                  <input type="text" className="form-control" id="otp" name="otp" value={otp} required placeholder="Enter Your OTP from here" onChange={(e) => setOtp(e.target.value)} />
                </div>
              
                
              <div class="d-grid mb-3"><button class="btn btn-primary" type="submit">submit</button></div>
              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
            <p class="text-3 text-muted text-center mb-0"><a class="btn-link" href="/forgot_password">Request a new code</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Content end -->  */}      
      </div>
  );    
}
export default PasswordCode;  