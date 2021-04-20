import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { render } from 'react-dom';

function PrivateRouter({ component:Component,auth:{isAuthenticated,loading },  ...rest}){
   

    return (
        <Route
          {...rest}
          render={(props) => isAuthenticated === true && !loading
            ? <Component {...props} />
            : <Redirect to="/login"/>}
        />
      )
    
}

PrivateRouter.propTypes = {
    auth:PropTypes.object.isRequired,
    

}
const mapStateToProps=state=>({
    auth:state.loginDataForm
});

export default connect(mapStateToProps)(PrivateRouter);