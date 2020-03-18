import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <div className="w3-card-4 w3-padding-large register-div card-background" id="register">
                <p>
                    <h3 className="w3-center"><b>Register</b></h3>
                </p>
                <br/><br/>
                <form action="#">
                    <label>Username</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="text"/>
                    <br/>
                    <label>Email</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="email"/>
                    <br/>
                    <label>Password</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent"
                           type="password"/>
                    <br/>
                    <p className="w3-center">
                        <button className="w3-btn w3-ripple" id="btn-register-send">Send
                        </button>
                        <button className="w3-btn w3-ripple" onClick="change_page_animation('login')">Login
                        </button>
                    </p>
                </form>
            </div>
        );
    }
}

export default Register