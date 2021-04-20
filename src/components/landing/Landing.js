import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom';
import '../../css/style.css'
import '../../css/Design.css'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const landing=({isAuthenticated})=>{

    if(isAuthenticated){
        return < Redirect to="/dashboard"/>
    }

        return (
            <div>
           
            <section class="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark" style={{height:"100vh",  backgroundSize: "cover",backgroundImage:"url(https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-0.3.5&s=c3d0603820b595592d80f5a239938c67&auto=format&fit=crop&w=1500&q=80)"}}>
  
      <div class="container-fluid">
      <div class="row  justify-content-center align-items-center d-flex text-center h-100">
        <div class="col-12 col-md-8  h-50 ">
            <h1 class="display-2  text-light mb-2 mt-5"><strong>Welcome to Redux</strong> </h1>
            <p class="lead  text-light mb-5">Sub-heading. Header 100% height with center align items</p>
            <div class="controls" style={{display: "flex",justifyContent:"center",alignItems:"space-between"}} >
            
        
           </div>
					
					<div class="btn-container-wrapper p-relative d-block  zindex-1">
						<a class="btn btn-link btn-lg   mt-md-3 mb-4 scroll align-self-center text-light" href="#">
						    <i class="fa fa-angle-down fa-4x text-light"></i>
						    </a>   
					</div>   
        </div>
		 
      </div>
    </div>
    </section>
    
            </div>
        )
    
}
landing.propTypes={
    isAuthenticated:PropTypes.bool
  };
const mapStateToProps=state=>({
    isAuthenticated:state.loginDataForm.isAuthenticated
  });
export default connect(mapStateToProps)(landing);
