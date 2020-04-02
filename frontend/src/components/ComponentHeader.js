import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link} from "react-router-dom"

class Header extends Component {
    constructor(props) {
        super(props);
        this.checkAuthentication();
    }

    checkAuthentication = () => {
        this.state = {
            isAuthenticated: this.props.token !== undefined ? true : false
        };
    };

    render() {
        this.checkAuthentication();
        return (
            <div className="w3-container">
                <ul className="horizontal-list">
                    <li className="w3-btn w3-ripple">
                        <Link className="horizontal-list-link" to="/login">
                            Login
                        </Link>
                    </li>
                    <li className="w3-btn w3-ripple">
                        <Link className="horizontal-list-link" to="/register">
                            Register
                        </Link>
                    </li>
                    {this.state.isAuthenticated &&
                    <li className="w3-btn w3-ripple">
                        <Link className="horizontal-list-link" to="/contact">
                            Contact
                        </Link>
                    </li>}
                    {this.state.isAuthenticated &&
                    <li className="w3-btn w3-ripple">
                        <Link className="horizontal-list-link" to="/profile">
                            Profile
                        </Link>
                    </li>}
                    {this.state.isAuthenticated &&
                    <li className="w3-btn w3-ripple">
                        <Link className="horizontal-list-link" to="/story">
                            Story
                        </Link>
                    </li>}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.login.token
    }
};

export default connect(mapStateToProps, null)(Header);