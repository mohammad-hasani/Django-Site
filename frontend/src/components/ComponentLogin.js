import React, {Component} from 'react';
import {connect} from 'react-redux';

import {sendLogin} from '../redux/login/actions'
import {Link} from "react-router-dom";



class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendData(this.state);
    };

    handleDataChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="w3-card-4 w3-padding-large login-div card-background" id="login">
                <p>
                    <h3 className="w3-center"><b>Login</b></h3>
                </p>
                <br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="text" name="email"
                    onChange={this.handleDataChange}/>
                    <br/>
                    <label>Password</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="password" name="password"
                    onChange={this.handleDataChange}/>
                    <br/>
                    <p className="w3-center">
                        <button className="w3-btn w3-ripple" id="btn-login-send" type="submit">
                            Send
                        </button>
                        <Link className="w3-btn w3-ripple" to="/register">
                            Register
                        </Link>
                    </p>
                </form>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.login.loading,
        token: state.login.token
    }
};

const matchDispatchToProps = dispatch => {
    return {
        sendData: data => dispatch(sendLogin(data))
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(Login)