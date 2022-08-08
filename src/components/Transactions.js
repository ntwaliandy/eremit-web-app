import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Transaction = ({props}) => {
  const location = useLocation();
  const [data, setData] = useState([]);
      useEffect(() => {
        console.log(location)
        const temp = localStorage.getItem("data")
        const loadedData = JSON.parse(temp)
        const token = "Bearer " + loadedData.token
        const bodyData = {
          "wallet_id": location.state.walletId
        }
        const requiredOptions = {
          method: "POST",
          headers: {
            "Authorization": token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(bodyData)
        }
        fetch("http://18.116.9.199:9000/transaction_base_on_wallet", requiredOptions)
        .then((response) => response.json())
        .then(res => {
          console.log(res)
          setData(res);
        });
      }, [])
        return (
         <div>
           

<div id="main-wrapper"> 
  
<header id="header">
    <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start"> 
          
          <div class="logo me-3"> <a class="d-flex" href="/eremit" title="eRemit - HTML Template"><img src="assets/images/logo2.png" alt="eRemit" /></a> </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
          
          <nav class="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto">
                <li class="active"><a href="/eremit/#/dashboard">Dashboard</a></li>
                <li><a href="/eremit/#/send-money">Send</a></li>
                <li><a href="/eremit/#/deposit">Deposit/Withdraw</a></li>
                <li><a href="/eremit/#/help">Help</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="header-column justify-content-end"> 
          <nav class="login-signup navbar navbar-expand">
          <div class="col-auto d-flex align-items-center ms-auto">
                    <div class="dropdown"> <a class="text-muted btn-link" href="#" role="button" id="statements" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img class="rounded-circle" src="assets/images/profile-thumb-sm.jpg" alt="" /></a>
                      <div class="dropdown-menu dropdown-menu-end" aria-labelledby="statements"> <a class="dropdown-item" href="/eremit/#/my-profile">My Profile</a> <a class="dropdown-item" href="/eremit/#/login"onClick={() =>{ localStorage.removeItem('data') } }>Logout</a> </div>
                    </div>
                  </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div id="content" class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-16">
          <h2 class="fw-400 mb-3">Transactions</h2>
          <div class="row">
            <div class="col mb-2">
              <form id="filterTransactions" method="post">
                <div class="row g-3 mb-3">
                  <div class="col-sm-6 col-md-5">
                    <div class="position-relative">
					<input id="dateRange" type="text" class="form-control" placeholder="Date Range" />
                    <span class="icon-inside"><i class="fas fa-calendar-alt"></i></span>
					</div>
				  </div>
                  <div class="col-auto d-flex align-items-center me-auto form-group" data-bs-toggle="collapse"> <a class="btn-link" data-bs-toggle="collapse" href="#allFilters" aria-expanded="false" aria-controls="allFilters">All Filters<i class="fas fa-sliders-h text-3 ms-1"></i></a> </div>
				  
                  <div class="col-auto d-flex align-items-center ms-auto">
                    <div class="dropdown"> <a class="text-muted btn-link" href="#" role="button" id="statements" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-file-download text-3 me-1"></i>Statements</a>
                      <div class="dropdown-menu dropdown-menu-end" aria-labelledby="statements"> <a class="dropdown-item" href="#">CSV</a> <a class="dropdown-item" href="#">PDF</a> </div>
                    </div>
                  </div>
                  <div class="col-12 collapse" id="allFilters">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="allTransactions" name="allFilters" checked />
                      <label class="form-check-label" for="allTransactions">All Transactions</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="paymentsSend" name="allFilters" />
                      <label class="form-check-label" for="paymentsSend">Payments Send</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="paymentsReceived" name="allFilters" />
                      <label class="form-check-label" for="paymentsReceived">Payments Received</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="refunds" name="allFilters" />
                      <label class="form-check-label" for="refunds">Refunds</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="withdrawal" name="allFilters" />
                      <label class="form-check-label" for="withdrawal">Withdrawal</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="deposit" name="allFilters" />
                      <label class="form-check-label" for="deposit">Deposit</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="bg-white shadow-sm rounded py-4 mb-4">
            <h3 class="text-5 fw-400 d-flex align-items-center px-4 mb-4">All Transactions</h3>
            
            <div class="transaction-title py-2 px-4">
              <div class="row">
                <div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
                <div class="col col-sm-7 text-center">Description</div>
                <div class="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
                <div class="col-3 col-sm-2 text-end">Amount</div>
              </div>
            </div>
            <div class="transaction-list">
              
            
            { data.length > 0 ?
              data.map(tr => {
                if (tr.from_account === location.state.walletId && tr.status === 'credit' ) {
                  return (
                    <>
                  <div class="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target={"#transaction-detail" + tr.id}>
                    <div class="row align-items-center flex-row">
                      <div class="col-2 col-sm-1 text-center"> <p>{tr.date_time}</p> </div>
                      <div class="col col-sm-7"> <span class="text-muted">{tr.reason}</span> </div>
                      <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span class="text-success" data-bs-toggle="tooltip" title="In Progress"><i class="fas fa-check-circle"></i> </span>sent </div>
                      <div class="col-3 col-sm-2 text-end text-4"> <span class="text-nowrap"></span> <span class="text-2 text-uppercase">{tr.amount} ({location.state.currency})</span> </div>
                    </div>
                  </div>
                  <div id={"transaction-detail" + tr.id} class="modal fade" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered transaction-details" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="row g-0">
                      <div class="col-sm-5 d-flex justify-content-center bg-primary rounded-start py-4">
                        <div class="my-auto text-center">
                          <div class="text-17 text-white my-3"><i class="fas fa-building"></i></div>
                          <h3 class="text-4 text-white fw-400 my-3">EREMIT Ltd</h3>
                          <div class="text-8 fw-500 text-white my-4">{tr.amount} {location.state.currency}</div>
                          <p class="text-white">{tr.date_time}</p>
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <h5 class="text-5 fw-400 m-3">Transaction Details
                          <button type="button" class="btn-close text-2 float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                        </h5>
                        <hr />
                        <div class="px-3">
                          <ul class="list-unstyled">
                            <li class="mb-2">Payment Amount <span class="float-end text-3">{tr.amount} {location.state.currency}</span></li>
                            <li class="mb-2">Fee <span class="float-end text-3">0.0 {location.state.currency}</span></li>
                          </ul>
                          <hr class="mb-2" />
                          <p class="d-flex align-items-center fw-500 mb-0">Total Amount <span class="text-3 ms-auto">{tr.amount} {location.state.currency} </span></p>
						  <hr class="mb-4 mt-2" />
                          <ul class="list-unstyled">
                            <li class="fw-500">sent to:</li>
                            <li class="text-muted">{tr.to_account}</li>
                          </ul>
                          <ul class="list-unstyled">
                            <li class="fw-500">Transaction ID:</li>
                            <li class="text-muted">{tr.transaction_id}</li>
                          </ul>
                          <ul class="list-unstyled">
                            <li class="fw-500">Description:</li>
                            <li class="text-muted">{tr.reason}</li>
                          </ul>
                          <ul class="list-unstyled">
                            <li class="fw-500">Status:</li>
                            <li class="text-muted">Completed<span class="text-success text-3 ms-1"><i class="fas fa-check-circle"></i></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  </>
                  )
                } else if (tr.to_account === location.state.walletId && tr.status === 'debit') {
                  return (
                    <>
                    <div class="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target={"#transaction-detail" + tr.id}>
                    <div class="row align-items-center flex-row">
                      <div class="col-2 col-sm-1 text-center"> <p>{tr.date_time}</p> </div>
                      <div class="col col-sm-7">  <span class="text-muted">{tr.reason}</span> </div>
                      <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span class="text-success" data-bs-toggle="tooltip" title="In Progress"><i class="fas fa-check-circle"></i> </span> received</div>
                      <div class="col-3 col-sm-2 text-end text-4"> <span class="text-nowrap"></span> <span class="text-2 text-uppercase">{tr.amount} ({location.state.currency})</span> </div>
                    </div>
                    </div> 
                    <div id={"transaction-detail" + tr.id} class="modal fade" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered transaction-details" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="row g-0">
                      <div class="col-sm-5 d-flex justify-content-center bg-primary rounded-start py-4">
                        <div class="my-auto text-center">
                          <div class="text-17 text-white my-3"><i class="fas fa-building"></i></div>
                          <h3 class="text-4 text-white fw-400 my-3">EREMIT Ltd</h3>
                          <div class="text-8 fw-500 text-white my-4">{tr.amount} {location.state.currency}</div>
                          <p class="text-white">{tr.date_time}</p>
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <h5 class="text-5 fw-400 m-3">Transaction Details
                          <button type="button" class="btn-close text-2 float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                        </h5>
                        <hr />
                        <div class="px-3">
                          <ul class="list-unstyled">
                            <li class="mb-2">Payment Amount <span class="float-end text-3">{tr.amount} {location.state.currency}</span></li>
                            <li class="mb-2">Fee <span class="float-end text-3">0.0 {location.state.currency}</span></li>
                          </ul>
                          <hr class="mb-2" />
                          <p class="d-flex align-items-center fw-500 mb-0">Total Amount <span class="text-3 ms-auto">{tr.amount} {location.state.currency} </span></p>
						  <hr class="mb-4 mt-2" />
                          <ul class="list-unstyled">
                            <li class="fw-500">received from:</li>
                            <li class="text-muted">{tr.from_account}</li>
                          </ul>
                          <ul class="list-unstyled">
                            <li class="fw-500">Transaction ID:</li>
                            <li class="text-muted">{tr.transaction_id}</li>
                          </ul>
                          <ul class="list-unstyled">
                            <li class="fw-500">Description:</li>
                            <li class="text-muted">{tr.reason}</li>
                          </ul>
                          <ul class="list-unstyled">
                            <li class="fw-500">Status:</li>
                            <li class="text-muted">Completed<span class="text-success text-3 ms-1"><i class="fas fa-check-circle"></i></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  </>
                    
                  )
                }
                
            
            }) : 
            <div class="transaction-item px-4 py-3" data-bs-toggle="modal">
            <div class="row align-items-center flex-row">
              <div class="col-2 col-sm-1 text-center"> <p></p> </div>
              <div class="col col-sm-7"> <p>No Transaction Yet!</p> <span class="text-muted"></span> </div>
              <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span class="text-success" data-bs-toggle="tooltip" title="In Progress"> </span></div>
              <div class="col-3 col-sm-2 text-end text-4"> <span class="text-nowrap"></span> <span class="text-2 text-uppercase"></span> </div>
            </div>
          </div>
            }



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
            <li class="nav-item"> <a class="nav-link active" href="/eremit/#/dashboard">Home</a></li>
            <li class="nav-item"> <a class="nav-link" href="/eremit/#/contact">Contact us</a></li>
            <li class="nav-item"> <a class="nav-link" href="/eremit/#/help">Help</a></li>
            <li class="nav-item"> <a class="nav-link" href="/eremit/#/about">About us</a></li>
            <li class="nav-item"> <a class="nav-link" href="/#">Fees</a></li>
          </ul>
        </div>
        <div class="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
          <ul class="social-icons justify-content-center">
            <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" title="Twitter"><i class="fab fa-twitter"></i></a></li>
            <li class="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" title="Google"><i class="fab fa-google"></i></a></li>
            <li class="social-icons-youtube"><a data-bs-toggle="tooltip" href="http://www.youtube.com/" title="Youtube"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright pt-3 pt-lg-2 mt-2">
        <div class="row">
          <div class="col-lg">
            <p class="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a href="/eremit/#/">eRemit</a>. All Rights Reserved.</p>
          </div>
          <div class="col-lg d-lg-flex align-items-center justify-content-lg-end">
            <ul class="nav justify-content-center">
              <li class="nav-item"> <a class="nav-link active" href="/#">Security</a></li>
              <li class="nav-item"> <a class="nav-link" href="/#">Terms</a></li>
              <li class="nav-item"> <a class="nav-link" href="/#">Privacy</a></li>
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

export default Transaction;