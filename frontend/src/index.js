
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

// core components
import MemberShipOfficer from './layouts/memberShipOfficer/memberShipOfficers'
import PrintingOfficer from './layouts/PrintingOfficer/printingOfficer'
import DeliveryOfficer from './layouts/DelevryOfficer/delevryOfficer'
import User from "layouts/member";
import Admin from './layouts/Admin'
import Login from './views/Login/login'
import launchingPage from './views/landingPage/landingPage'
import FinanceOfficer from './layouts/financeOfficer/financeOfficer'
import NotMember from './layouts/notMember/notMember'
import SignUp from './views/signup/signup'
import VisaOfficer from './layouts/visaOfficer/visaOfficer'
import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route exact path='/' component={launchingPage}/>
      <Route exact path='/home' component={launchingPage}/>
      <Route exact path='/login' component={Login}/>
      <Route path="/admin" component={Admin} />
      <Route path="/member" component={User} />
      <Route path="/memberShip" component={MemberShipOfficer} />
      
      <Route path="/financeOfficer" component={FinanceOfficer} />
      <Route path="/printingOfficer" component={PrintingOfficer} />
      <Route path="/deliveryOfficer" component={DeliveryOfficer} />
      <Route path="/notMember" component={NotMember}/>
      <Route path="/signUp/:email" component={SignUp}/>
      <Route path="/visaOfficer" component={VisaOfficer}/>
   
    </Switch>
  </Router>,
  document.getElementById("root")
);
