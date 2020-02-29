import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Aboutus from "views/examples/Aboutus";
// import SearchBox from "./components/Search/SearchBox";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
import "views/examples/Aboutus.css"

import './index.css';
import App from './App.jsx';
// pages for this kit
import Index from "views/Index.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";    
import ProfilePage from "views/examples/ProfilePage.js";
import SignUp from "views/index-sections/SignUp.js";
import SearchBox from "./components/Search/SearchApp.js"
import {HomePage} from './pages/homepage/homepage.component';
const AIEconomics = () => (
  <div>
    <h1>THIS IS A ECONOMIC PAGE</h1>
    <h2>THIS PAGE IS UNDER CONSTRUCTION</h2>
  </div>
);
const AIDemographics = () => (
  <div>
    <h1>THIS IS A Demographic PAGE</h1>
    <h2>THIS PAGE IS UNDER CONSTRUCTION</h2>
  </div>
);
const AITradeAnalytics = () => (
  <div>
    <h1>THIS IS A Trade Analytics PAGE</h1>
    <h2>THIS PAGE IS UNDER CONSTRUCTION</h2>
  </div>
);
const AIIndustrialResearch = () => (
  <div>
    <h1>THIS IS A Industrial Research PAGE</h1>
    <h2>THIS PAGE IS UNDER CONSTRUCTION</h2>
  </div>
);


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/Aboutus"
          render={props => <Aboutus {...props} />}
        />     
        <Route
          path="/LandingPage"
          render={props => <LandingPage {...props} />}
        />     
         <Route
          path="/reg"
          render={props => <App {...props} />}
        />
         <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        <Route path="/reg" render={props => <SignUp {...props} />} />
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        {/* <Route exact path='/' component={HomePage} /> */}
        <Route path='/AI-Economics' component={AIEconomics} />
        <Route path='/AI-TRADE_ANALYTICS' component={AITradeAnalytics} />
        <Route path='/AI-DEMOGRAPHY' component={AIDemographics} />
        <Route path='/AI-INDUSTRIAL_RESEARCH' component={AIIndustrialResearch} />

        
        {/* <Redirect to="/login" /> */}
         <Redirect from="/" to="/LandingPage" />
      </Switch>
   </BrowserRouter>,
   document.getElementById("root")
 );
// ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();  