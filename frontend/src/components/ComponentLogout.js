import React, {Component} from 'react';
import {connect} from 'react-redux';

import {sendLogout} from '../redux/login/actions'
import { Redirect } from "react-router-dom";


class Logout extends Component {

    handleLogout = () => {
        this.props.sendLogoutRequest();
    };

    render() {
        this.handleLogout();
        return (
            <div className="w3-card-4 w3-padding-large login-div card-background" id="login">
                <Redirect to='/login'/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.login.loading
    }
};

const matchDispatchToProps = dispatch => {
    return {
        sendLogoutRequest: () => dispatch(sendLogout())
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(Logout)