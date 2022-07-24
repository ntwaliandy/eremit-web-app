
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
let navigate = useNavigate();
const [first_name, setFirst_name] = useState("");
const [last_name, setLast_name] = useState("");
const [email, setEmail] = useState("");
const [phone_number, setphone_number] = useState("");
const [password, setPassword] = useState("");
const [profile_pic, setprofile_pic] = useState("");
const [message, setMessage] = useState("");
    
    let handleSubmit = async (e) => {
      e.preventDefault();
      e.stopPropagation()
      try {
        await fetch("http://127.0.0.1:9000/add_user", {
          method: "POST",
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
            password: password,
            profile_pic: profile_pic,
          }),
          headers: {
            "Content-Type": "application/json"
          },
        }).then(results => results.json())
        .then((response) => {
          console.log(response)
          if ( response.status === 100) {
            navigate("/otp", { replace: true});
  
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
              <form id="loginForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="first_name" className="form-label">first_name</label>
                  <input type="text" className="form-control" id="first_name" name="first_name" value={first_name} required placeholder="Enter Your Name" onChange={(e) => setFirst_name(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label for="last_name" className="form-label">last_name</label>
                  <input type="text" className="form-control" id="last_name" name="last_name" value={last_name} required placeholder="Enter Your last Name" onChange={(e) => setLast_name(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label for="phone_number" className="form-label">phone_number</label>
                  <input type="text" className="form-control" id="phone_number" name="phone_number" value={phone_number} required placeholder="Enter Your phone number" onChange={(e) => setphone_number(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label for="emailAddress" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="emailAddress" name="email" value={email} required placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                </div> 
                <div className="mb-3">
                  <label for="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" name="password" value={password} required placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label for="profile_pic" className="form-label">profile_pic</label>
                  <input type="text" className="form-control" id="profile_pic" name="profile_pic" value={profile_pic} required placeholder="Enter Your phone number" onChange={(e) => setprofile_pic(e.target.value)} />
                </div>
                {/* <p>{this.state.message}</p> */}
                <div className="d-grid mt-4 mb-3"><button className="btn btn-primary" type="submit"> Sign Up</button></div>
                <div className="message">{message ? <p>{message}</p> : null}</div>
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
<script src="path/to/intlTelInput.js"></script>
<script>
  var input = document.querySelector("#phone_number");
  window.intlTelInput(input, {
    // any initialisation options go here
  });
</script>

      </div>
  );    
}
export default Register;  