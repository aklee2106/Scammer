import React from "react";
import GreetingContainer from './greeting/greeting_container';
import {Route} from 'react-router-dom'; 
import SignupFormContainer from './session_form/signup_form_container'; 
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import FeedContainer from './feed/feed_container';
import GroupsShowContainer from './groups/groups_show_container';


const App = () => (
  <div>
   
    <AuthRoute exact path='/' component={SplashContainer} />
    
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/home" component={FeedContainer} />
    <ProtectedRoute exact path="/groups/:groupId" component={GroupsShowContainer} />
  </div>
);

export default App;

