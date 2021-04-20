import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/style.css';

import Navbar from './components/landing/Navbar';
import Landing from './components/landing/Landing';
import Register from './components/login/Register';
import Login from './components/login/Login';
import Profile from './components/home/Profile';
// import Footer from './components/landing/footer';
import Dashboard from './components/home/dashboard';
import CreateProfile from './components/home/createProfile';
import Post from './components/posts/post'
import PrivateRouter from './components/PrivateRouter'




const App=()=> {

 
  return (
    <Router>
    <Fragment>
     <Navbar/>
 
     <br></br><br></br><br></br>
     <Route exact path='/' component={Landing}/>
  
     <div className="container">
  
     <Switch>
         <Route exact path="/register" component={Register}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/profile" component={Profile}/>
         <PrivateRouter exact path="/dashboard" component={Dashboard}/>
         <PrivateRouter exact path="/create-profile" component={CreateProfile}/>
         <PrivateRouter exact path="/post" component={Post}/>
         
     </Switch>
 
     </div>
     {/* <Footer/> */}
    </Fragment>

   
    </Router>
         
  );
}

export default App;
