import React, {Component} from 'react';

import {Link} from "react-router-dom"

class Header extends Component {

    render() {
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
                    <li className="w3-btn w3-ripple">
                        <Link className="horizontal-list-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="w3-btn w3-ripple">
                        <Link className="horizontal-list-link" to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li className="w3-btn w3-ripple">
                        <Link className="horizontal-list-link" to="/story">
                            Story
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header