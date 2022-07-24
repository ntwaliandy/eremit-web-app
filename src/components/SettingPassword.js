
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function SettingPassword() {
let navigate = useNavigate();
const Location = useLocation()
const [email, setEmail] = useState("");
const [new_password, setnew_password] = useState("");
const [confirm_new_password, setconfirm_new_password] = useState("");
const [message, setMessage] = useState("");

useEffect(() => (
  console.log(Location)

))
    
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await fetch("http://18.116.9.199:9000/setting_password", {
          method: "PUT",
          body: JSON.stringify({
            email: Location.state.email,
            new_password: new_password,
            confirm_new_password: confirm_new_password,
          }),
          headers: {
            "Content-Type": "application/json"
          },
        }).then(results => results.json())
        .then((response) => {
          console.log(response)
          if ( response.status === 100) {
            navigate("/login", { replace: true});
  
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
            <h3 class="fw-400 text-center mb-4">Reset your password</h3>
            <hr class="mx-n3 mx-sm-n5" />
            <p class="lead text-center">Insert your new ermeit password</p>
            <form id="signupForm" onSubmit={handleSubmit} >

            {/* <div className="mb-3">
                  <label for="emailAddress" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="emailAddress" name="email" value={email} required placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                </div>  */}

              <div className="mb-3">
                  <label for="loginPassword" className="form-label"> New Password</label>
                  <input type="password" className="form-control" id="loginPassword" name="new_password" value={new_password} required placeholder="Enter Password" onChange={(e) => setnew_password(e.target.value)} />
                </div>
              
                <div className="mb-3">
                  <label for="comfirmPassword" className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" id="confirmPassword" name="confirm_new_password" value={confirm_new_password} required placeholder="Enter Password" onChange={(e) => setconfirm_new_password(e.target.value)} />
                </div>
              <div class="d-grid mt-4 mb-3"><button class="btn btn-primary" type="submit">change password</button></div>
            </form>
            <p class="text-3 text-muted text-center mb-0">for further support visit the help center <a class="btn-link" href="/help">help</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Content end -->  */}
      </div>
  );    
}
export default SettingPassword;  