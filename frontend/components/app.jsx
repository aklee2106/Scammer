import React from "react";
import GreetingContainer from './greeting/greeting_container';
import {Route} from 'react-router-dom'; 
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>This is coming from App.jsx</h1>
      <GreetingContainer /> 
    </header>

    {/* <Route path="/login" component={SignupFormContainer} /> */}

  </div>
);

export default App;