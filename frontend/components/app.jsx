import React from "react";
import GreetingContainer from './greeting/greeting_container';
import {Route} from 'react-router-dom'; 
import SignupFormContainer from './session_form/signup_form_container'; 
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div>
    <AuthRoute exact path='/' component={SplashContainer} />
    {/* <aside>
      <GreetingContainer /> 
    </aside> */}
  
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;