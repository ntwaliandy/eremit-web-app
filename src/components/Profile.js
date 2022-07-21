import React, { Component } from "react";

class Profile extends Component {

  state = {
    person: [],
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    updateMessage: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
    allCuurencies: [],
    currency_code: "",
  }

  

  componentDidMount() {
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
    fetch("http://18.116.9.199:9000/get_user_by_id", requiredOptions)
    .then((response) => response.json())
    .then(personDetail => {
      console.log(personDetail)
      if (personDetail.status == 'token expired') {
        console.log("andyyyyyy => token expired")
      } else if (personDetail.status == 'token missing') {
        console.log("andyyy ==> token missing")
      } else {
        this.setState({ person: personDetail });
      }
      
    });

    // all currencies
    const requiredOpt = {
      method: "GET",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
    }
    fetch("http://18.116.9.199:9000/all_currencies", requiredOpt)
    .then((response) => response.json())
    .then(currencyDetails => {
      console.log(currencyDetails)
      this.setState({
        allCuurencies: currencyDetails,
      })
      
    });
  }

  UpdateUserhandleChange = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      ...this.state
      [name] = value
    })
  }

  UpdateUserhandleSubmit = e => {
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const token = "Bearer " + loadedData.token
    e.preventDefault()
    const userData = {
      "user_id": loadedData.user_id,
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "phone_number": this.state.phone,
    }
    const requiredOptions = {
      method: "PUT",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    }
    fetch("http://18.116.9.199:9000/update_user", requiredOptions)
    .then((response) => response.json())
    .then(personDetail => {
      console.log(personDetail)
      this.setState({ updateMessage: personDetail.message });
    });

  }

  UpdatePasshandleSubmit = e => {
    const temp = localStorage.getItem("data")
    const loadedData = JSON.parse(temp)
    const token = "Bearer " + loadedData.token
    e.preventDefault()
    const userData = {
      "user_id": loadedData.user_id,
      "current_password": this.state.current_password,
      "new_password": this.state.new_password,
      "confirm_new_password": this.state.confirm_password,
    }
    const requiredOptions = {
      method: "PUT",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    }
    fetch("http://18.116.9.199:9000/update_user_password", requiredOptions)
    .then((response) => response.json())
    .then(personDetail => {
      console.log(personDetail)
      this.setState({ updateMessage: personDetail.message });
    });

  }
  handleSelectedChange = e => {
    this.setState({
      currency_code: e.target.value
    })
  }

curencySubmit = e => {
  e.preventDefault()
  const temp = localStorage.getItem("data")
  const loadedData = JSON.parse(temp)
  const token = "Bearer " + loadedData.token

  const bodyData = {
    "user_id": loadedData.user_id,
    "currency_code": this.state.currency_code
  }
  const requiredOp = {
    method: "POST",
    headers: {
      "Authorization": token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
  }

  fetch("http://18.116.9.199:9000/create_other_wallet", requiredOp)
    .then((response) => response.json())
    .then(personDetail => {
      console.log(personDetail)
        this.setState({ updateMessage: personDetail.message });
      
    });

}

  
  
  render() {

    return (
            <div>
                <div id="main-wrapper"> 
  
                <header id="header">
      <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start"> 
          
          <div class="logo me-3"> <a class="d-flex" href="/#" title="Payyed - HTML Template"><img src="assets/images/logo.png" alt="Payyed" /></a> </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
          
          <nav class="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto">
                <li><a href="/dashboard">Dashboard</a></li>
                <li class="active"><a href="/send-money">Send</a></li>
                <li><a href="/help">Help</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="header-column justify-content-end"> 
          <nav class="login-signup navbar navbar-expand">
          <div class="col-auto d-flex align-items-center ms-auto">
                    <div class="dropdown"> <a class="text-muted btn-link" href="#" role="button" id="statements" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img class="rounded-circle" src="assets/images/profile-thumb-sm.jpg" alt="" /></a>
                      <div class="dropdown-menu dropdown-menu-end" aria-labelledby="statements"> <a class="dropdown-item" href="/my-profile">My Profile</a> <a class="dropdown-item" href="/login"onClick={() =>{ localStorage.removeItem('data') } }>Logout</a> </div>
                    </div>
                  </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div class="bg-primary">
    <div class="container d-flex justify-content-center">
      <ul class="nav nav-pills alternate nav-lg border-bottom-0">
        <li class="nav-item"> <a class="nav-link active" href="/my-profile">Account</a></li>
      </ul>
    </div>
  </div>
  <div id="content" class="py-4">
    <div class="container">
      <div class="row"> 
        
        
        <div class="col-lg-16"> 
          
          {
            this.state.person.map((pr) => (
              <div class="bg-white shadow-sm rounded p-4 mb-4">
            <h3 class="text-5 fw-400 d-flex align-items-center mb-4">Personal Details<a href="#edit-personal-details" data-bs-toggle="modal" class="ms-auto text-2 text-uppercase btn-link"><span class="me-1"><i class="fas fa-edit"></i></span>Edit</a></h3>
            <hr class="mx-n4 mb-4" />
            <div class="row gx-3 align-items-center" key={pr.first_name}>
              <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">First Name:</p>
              <p class="col-sm-9 text-3">{pr.first_name}</p>
            </div>
            <div class="row gx-3 align-items-center" key={pr.last_name}>
              <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Last Name:</p>
              <p class="col-sm-9 text-3">{pr.last_name}</p>
            </div>
            <div class="row gx-3 align-items-center" key={pr.phone_nmber}>
              <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Telephone Number:</p>
              <p class="col-sm-9 text-3">{pr.phone_number}</p>
            </div>
            <div class="row gx-3 align-items-center" key={pr.email}>
              <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Email:</p>
              <p class="col-sm-9 text-3">{pr.email}</p>
            </div>
            <div class="row gx-3 align-items-center" key={pr.status}>
              <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Status:</p>
              <p class="col-sm-9 text-3">{pr.status}</p>
            </div>
            <div class="row gx-3 align-items-center" key={pr.date_time}>
              <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Date Modified:</p>
              <p class="col-sm-9 text-3">{pr.date_time}</p>
            </div>
          </div>
            ))
          }
          <div id="edit-personal-details" class="modal fade " role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title fw-400">Personal Details</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                  
                      <form id="personaldetails" onSubmit={this.UpdateUserhandleSubmit}>
                    <div class="row g-3">
                      <div class="col-12 col-sm-6">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" value={this.state.first_name} class="form-control" name="first_name" data-bv-field="firstName" id="firstName" required placeholder="First Name" onChange={this.UpdateUserhandleChange} />
                      </div>
                      <div class="col-12 col-sm-6">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" value={this.state.last_name} class="form-control" name="last_name" data-bv-field="lastName" id="lastName" required placeholder="Last Name" onChange={this.UpdateUserhandleChange} />
                      </div>
                      <div class="col-12 col-sm-6">
                        <label for="lastName" class="form-label">Telephone Number</label>
                        <input type="text" value={this.state.phone} class="form-control" name="phone" data-bv-field="lastName" id="lastName" required placeholder="Phone Number" onChange={this.UpdateUserhandleChange} />
                      </div>
                      <div class="col-12 col-sm-6">
                        <label for="lastName" class="form-label">Email</label>
                        <input type="text" value={this.state.email} class="form-control" name="email" data-bv-field="lastName" id="lastName" required placeholder="Email" onChange={this.UpdateUserhandleChange} />
                      </div>
					          </div>
                    <center><p>{this.state.updateMessage}</p></center>
					  
                      <div class="row g-3">
                        <div class="col-12 mt-4 d-grid"><input type="submit" class="btn btn-primary" value="submit" /></div>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          {/* update password */}
          <div class="bg-white shadow-sm rounded p-4 mb-4">
            <h3 class="text-5 fw-400 d-flex align-items-center mb-4">Update Password<a href="#change-password" data-bs-toggle="modal" class="ms-auto text-2 text-uppercase btn-link"><span class="me-1"><i class="fas fa-edit"></i></span>Change</a></h3>
            <hr class="mx-n4 mb-4" />
            {
              this.state.person.map((pr) => (
                <p class="text-3">Create or update your password. - <span class="text-muted">Last changed: {pr.date_time}</span></p>
              ))
            }
          </div>
          <div id="change-password" class="modal fade " role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title fw-400">Change Password</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                  <form id="changePassword" onSubmit={this.UpdatePasshandleSubmit}>
                    <div class="mb-3">
                      <label for="existingPassword" class="form-label">Confirm Current Password</label>
                      <input type="text" class="form-control" value={this.state.current_password} name="current_password" data-bv-field="existingpassword" id="existingPassword" required="" placeholder="Enter Current Password" onChange={this.UpdateUserhandleChange} />
                    </div>
                    <div class="mb-3">
                      <label for="newPassword" class="form-label">New Password</label>
                      <input type="text" class="form-control" value={this.state.new_password} name="new_password" data-bv-field="newpassword" id="newPassword" required="" placeholder="Enter New Password" onChange={this.UpdateUserhandleChange} />
                    </div>
                    <div class="mb-3">
                      <label for="confirmPassword" class="form-label">Confirm New Password</label>
                      <input type="text" class="form-control" value={this.state.confirm_password} name="confirm_password" data-bv-field="confirmgpassword" id="confirmPassword" required="" placeholder="Enter Confirm New Password" onChange={this.UpdateUserhandleChange} />
                    </div>
                    <p>{this.state.updateMessage}</p>
                    <div class="d-grid mt-4"><button class="btn btn-primary" type="submit">Update Password</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          

          {/* create currency */}
          
          <div class="bg-white shadow-sm rounded p-4 mb-4">
            <h3 class="text-5 fw-400 d-flex align-items-center mb-4">Create a Wallet<a href="#edit-email" data-bs-toggle="modal" class="ms-auto text-2 text-uppercase btn-link"><span class="me-1"><i class="fas fa-edit"></i></span>Edit</a></h3>
            <hr class="mx-n4 mb-4" />
            <p class="text-3">Create a different wallet to make transfers so easy </p>
          </div>
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
                    <label for="emailID" class="form-label">WALLET CURRENCY NAME</label>
                    <select id="youSendCurrency" value={this.state.senderId} onChange={(e) => this.handleSelectedChange(e)} data-style="form-select bg-transparent border-0" data-container="body" data-live-search="true" class="selectpicker form-control bg-transparent" required>
                    <option data-icon="currency-flag currency-flag-ars me-1"  data-subtext="Argentine peso" value="">Choose Walllet Currency Code</option>
                    {
                      this.state.allCuurencies.map((cr, index) => (
                        <option key={index} data-icon="currency-flag currency-flag-ars me-1"  data-subtext="Argentine peso" value={cr.currency_code}>{cr.currency_code}</option>
                      ))
                    }
                    
                    </select>
                    </div>
                    {this.state.updateMessage}
                    <div class="d-grid mt-4"><button class="btn btn-primary" type="submit">Create</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg d-lg-flex align-items-center">
          <ul class="nav justify-content-center justify-content-lg-start text-3">
            <li class="nav-item"> <a class="nav-link active" href="#">About Us</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Support</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Help</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Careers</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Affiliate</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Fees</a></li>
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
            <p class="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a href="#">Payyed</a>. All Rights Reserved.</p>
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
</div>
</div>
        )
    }
}

export default Profile;