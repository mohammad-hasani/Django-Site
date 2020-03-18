import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div className="w3-card-4 w3-padding-large login-div card-background" id="login">
                <p>
                    <h3 className="w3-center"><b>Login</b></h3>
                </p>
                <br/><br/>
                <form>
                    <label>Username</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="text"/>
                    <br/>
                    <label>Password</label>
                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="password"/>
                    <br/>
                    <p className="w3-center">
                        <button className="w3-btn w3-ripple" id="btn-login-send">
                            Send
                        </button>
                        <button className="w3-btn w3-ripple" type="button"
                                onClick="change_page_animation('register')">
                            Register
                        </button>
                    </p>
                </form>

            </div>
        );
    }
}

export default Login