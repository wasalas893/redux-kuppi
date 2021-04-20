import React from 'react';
import {Link} from 'react-router-dom';
import{connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../Actions/loginAction'
import '../../css/style.css'


const Navbar=({auth:{isAuthenticated, loading},logout})=> {
           
             

  

        return (


         <div id="header" class="fixed-top header-inner-pages">
            <div class="container d-flex align-items-center">
            <h1 class="logo me-auto"><Link to="/">Redux</Link></h1>
        
              <nav id="navbar" className="navbar">
                <ul>
                { !loading && isAuthenticated? (
                     <>
                     <li><Link className="nav-link   scrollto"  to="/profile">Profile</Link></li>
                    <li><Link className="nav-link scrollto"  to="/dashboard">Dashboard</Link></li>
                    <li><Link className="nav-link scrollto"  to="/post">Post</Link></li>
                    <li><Link className="getstarted scrollto" onClick={logout}  to="/login">logout </Link></li>
    
           
                    </>
                  ) : (
                    <>

                  <li><Link className="getstarted scrollto"  to="/register">Register </Link></li>
                  <li><Link className="getstarted scrollto"  to="/login">Login</Link></li>
                
                  
    
                  </>
                      )}
                
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
        
              </div>
              </div> 
              
          
        )

        


        
}
Navbar.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
};

const mapStateToProps=state=>({
 
     auth:state.loginDataForm

 
})

export default connect(mapStateToProps,{logout})(Navbar);
