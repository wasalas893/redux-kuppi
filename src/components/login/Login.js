import React, {useState } from 'react';
import {Redirect} from 'react-router-dom';
import {login} from '../../Actions/loginAction';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import '../../css/Design.css';

const Login=({loginData:{isAuthenticated},login})=>  {


  const[formData,setFormData]=useState({
       email:'',
       password:''
  })

  const {email,password}=formData;

  
const onChange=e=>setFormData({ ...formData,[e.target.name]:e.target.value});


const onSubmit=async e=>{
  e.preventDefault();

  login({ email,password });





      
};

//redirect to loggined
if(isAuthenticated){

  return <Redirect to='/dashboard'/>
}



        return (
           
          <div style={{marginTop:'95px'}}>
          
           <form class="form-horizontal" onSubmit={e=>onSubmit(e)}>
  <fieldset>
    <div id="legend">
      <legend class="">Login</legend>
    </div>
 
    <div class="control-group">
   
      <label class="control-label" for="email">E-mail</label>
      <div class="controls">
        <input type="text" id="email" name="email" placeholder="" class="input-xlarge"
          alue={email}
          onChange={e=>onChange(e)}
        />
        <p class="help-block">Please provide your E-mail</p>
      </div>
    </div>
 
    <div class="control-group">
    
      <label class="control-label" for="password">Password</label>
      <div class="controls">

      <input type="password" id="password" name="password" placeholder="" class="input-xlarge"
        alue={password}
          onChange={e=>onChange(e)}
      />
        <p class="help-block">Password should be at least 4 characters</p>

      </div>

    </div>

 
    <div class="control-group">
  
      <div class="controls">
        <input type="submit" class="btn btn-success" value="login"/>
      </div>
    </div>

  </fieldset>

  </form>
  </div>
        )
 
}
Login.propTypes={
  login:PropTypes.func.isRequired,
  loginData:PropTypes.object.isRequired
};

const mapStateToProps=state=>({
 
   loginData:state.loginDataForm

})


function matchDispatchToProps(dispatch){
  return bindActionCreators({login:login},dispatch)
}

export default connect(mapStateToProps,{matchDispatchToProps,login})(Login);
