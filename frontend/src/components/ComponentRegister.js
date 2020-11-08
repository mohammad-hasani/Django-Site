import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {sendRegister} from "../redux/register/actions";
import {connect} from "react-redux";

class Register extends Component {

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
            <div className="w3-card-4 w3-padding-large register-div card-background" id="register">
                <p>
                    <h3 className="w3-center"><b>Register</b></h3>
                </p>
                <br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="text"
                    name='username' onChange={this.handleDataChange}/>
                    <br/>
                    <label>Email</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="email"
                    name='email' onChange={this.handleDataChange}/>
                    <br/>
                    <label>Password</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="password"
                    name='password1' onChange={this.handleDataChange}/>
                    <br/>
                    <label>Confirm Password</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="password"
                    name='password2' onChange={this.handleDataChange}/>
                    <br/>
                    <p className="w3-center">
                        <button className="w3-btn w3-ripple" id="btn-login-send" type="submit">
                            Send
                        </button>
                        <Link className="w3-btn w3-ripple" to='/login'>
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.login.loading
    }
};

const matchDispatchToProps = dispatch => {
    return {
        sendData: data => dispatch(sendRegister(data))
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(Register)