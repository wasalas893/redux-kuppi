import React, { Component,useState } from 'react'
import { Link,Redirect} from 'react-router-dom';
import {register} from '../../Actions/RegisterAction';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


const  Register=({registerData:{isAuthenticated},register})=> {
  const [formData,setFormData]=useState({
    name: '',
    email: '',
    password: '',
    password2: ''
});

const {name, email, password, password2}=formData;

const onChange=e=>setFormData({ ...formData,[e.target.name]:e.target.value});

const onSubmit=async e=>{
    e.preventDefault();
    if(password!==password2){
     console.log('password do not match');
       
    }else{
       register({ name, email,password});
    }
    
};

if(isAuthenticated){

  return <Redirect to='/dashboard'/>
  
}
  

        return (
            <div>
            <br></br><br></br>
               <form class="form-horizontal" onSubmit={e=>onSubmit(e)}>
        <fieldset>
    <div id="legend">
      <legend class="">Register</legend>
    </div>
    <div class="control-group">
    
      <label class="control-label"  for="username">Username</label>
      <div class="controls">
        <input type="text" id="username" name="name" placeholder="" class="input-xlarge" value={name}
          onChange={e=>onChange(e)}/>
        <p class="help-block">Username can contain any letters or numbers, without spaces</p>
      </div>
    </div>
 
    <div class="control-group">
   
      <label class="control-label" for="email">E-mail</label>
      <div class="controls">
        <input type="text" id="email" name="email" placeholder="" class="input-xlarge" value={email}
          onChange={e=>onChange(e)}/>
        <p class="help-block">Please provide your E-mail</p>
      </div>
    </div>
 
    <div class="control-group">
    
      <label class="control-label" for="password">Password</label>
      <div class="controls">

      <input type="password" id="password" name="password" placeholder="" class="input-xlarge" value={password}
          onChange={e=>onChange(e)} />
        <p class="help-block">Password should be at least 4 characters</p>

      </div>

    </div>
 
    <div class="control-group">
    
      <label class="control-label"  for="password_confirm">Password (Confirm)</label>
      <div class="controls">
        <input type="password" id="password_confirm" name="password2" placeholder="" class="input-xlarge" value={password2}
          onChange={e=>onChange(e)}/>
        <p class="help-block">Please confirm password</p>
      </div>
    </div>
 
    <div class="control-group" style={{display: "flex"}}>
  
      <div class="controls">
        <input type="submit" class="btn btn-success" value="Register"/>
      </div>
         
      
    </div>

  </fieldset>

  </form>
            </div>
        )
    
}

Register.propTypes={
  register:PropTypes.func.isRequired,
  registerData:PropTypes.object.isRequired
};

const mapStateToProps=state=>({

  registerData:state.registerDataForm
  
});

function matchDispatchToProps(dispatch){
  return bindActionCreators({register:register},dispatch)
}




export default connect(mapStateToProps,{matchDispatchToProps,register})(Register);
