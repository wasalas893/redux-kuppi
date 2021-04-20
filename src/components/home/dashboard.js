import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link,Redirect} from 'react-router-dom'
import {logout} from '../../Actions/loginAction'
import {connect} from 'react-redux';

const Dashboard=({auth:{isAuthenticated, loading },logout})=>{
 
        return (
            <div style={{marginTop:"60px"}}>
                <h1>Dashboard</h1>
                

            </div>
        )
    
}
Dashboard.propTypes={
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
  };
const mapStateToProps=state=>({
    auth:state.loginDataForm
  });
export default connect(mapStateToProps,{logout})(Dashboard);
