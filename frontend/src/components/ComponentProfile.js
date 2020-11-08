import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

import {fetchProfile, sendProfile} from "../redux/profile/actions";


class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData();
    }

    pageChangeHandler = (page, e) => {
        /*let unblock = this.props.history.block();
        location.href = page;
        unblock();*/
    };

    handleDataChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    handleUsername = (e) => {
        e.preventDefault();
        const data = {'username': this.state.username};
        this.props.sendData(data);
    };

    handlePassword = (e) => {
        e.preventDefault();
        if (this.state.new_password != this.state.new_password2) {
            return;
        }
        const data = {
            'old_password': this.state.old_password,
            'new_password': this.state.new_password
        };
        this.props.sendData(data);
    };

    handleAboutMe = (e) => {
        e.preventDefault();
        const data = {'about_me': this.state.about_me};
        this.props.sendData(data);
    };

    render() {
        return (
            <div className="w3-card-4 profile-div card-background" id="profile">
                <div className="w3-center w3-left w3-cell w3-cell-middle profile-div-left-side">
                    <p className="vertical-menu">
                        <button className="w3-btn w3-ripple"
                                onClick={(e) => this.pageChangeHandler('#profile-div-right-side-profile', e)}>
                            Profile
                        </button>
                    </p>
                    <p className="vertical-menu">
                        <button className="w3-btn w3-ripple"
                                onClick={(e) => this.pageChangeHandler('#profile-div-right-side-change_info', e)}>
                            Change Info
                        </button>
                    </p>
                    <p className="vertical-menu">
                        <button className="w3-btn w3-ripple"
                                onClick={(e) => this.pageChangeHandler('#profile-div-right-side-password', e)}>
                            Password
                        </button>
                    </p>
                    <p className="vertical-menu">
                        <button className="w3-btn w3-ripple"
                                onClick={(e) => this.pageChangeHandler('#profile-div-right-side-about_me', e)}>
                            About Me
                        </button>
                    </p>
                </div>
                <div
                    className="w3-card-4 w3-right w3-cell w3-cell-middle profile-div-right-side card-background horizontal-menu">
                    <div className="profile-tab" id="profile-div-right-side-profile">
                        <div className="profile-div-right-side-profile">
                            <h5>Username</h5>
                            <p className="w3-opacity">
                                {this.props.data.username}
                            </p>
                        </div>
                        <div className="profile-div-right-side-profile">
                            <h5>Email</h5>
                            <p className="w3-opacity">
                                {this.props.email}
                            </p>
                        </div>
                        <div className="profile-div-right-side-profile">
                            <h5>About Me</h5>

                            <p className="w3-opacity">
                                {(() => {
                                    try {
                                        return this.props.data.profile.about_me
                                    } catch (e) {

                                    }
                                })()}
                            </p>

                        </div>
                    </div>
                    <div className="profile-tab" id="profile-div-right-side-change_info">
                        <form onSubmit={this.handleUsername}>
                            <div className="profile-div-right-side-change_info">
                                <label>Username</label>
                                <p className="w3-opacity">
                                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="text"
                                           name='username' onChange={this.handleDataChange}
                                           value={this.props.data.username}/>
                                </p>
                            </div>

                            <div className=" w3-center profile-div-right-side-change_info top-margin-60">
                                <button className="w3-btn w3-ripple" id="btn-profile-change_info" type='submit'>Send
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="profile-tab" id="profile-div-right-side-password">
                        <form onSubmit={this.handlePassword}>
                            <div className="profile-div-right-side-change_info">
                                <label>Old Passsword</label>
                                <p className="w3-opacity">
                                    <input className="w3-input w3-opacity w3-text-white input-transparent"
                                           type="password"
                                           name='old_password' onChange={this.handleDataChange}/>
                                </p>
                            </div>
                            <div className="profile-div-right-side-password">
                                <label>New Password</label>
                                <p className="w3-opacity">
                                    <input className="w3-input w3-opacity w3-text-white input-transparent"
                                           type="password" name='new_password' onChange={this.handleDataChange}/>
                                </p>
                            </div>

                            <div className="profile-div-right-side-password">
                                <label>Confirm New Password</label>
                                <p className="w3-opacity">
                                    <input className="w3-input w3-opacity w3-text-white input-transparent"
                                           type="password" name='new_password2' onChange={this.handleDataChange}/>
                                </p>
                            </div>

                            <div className=" w3-center profile-div-right-side-password top-margin-60">
                                <button className="w3-btn w3-ripple" id="btn-profile-password" type='submit'>Send
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="profile-tab" id="profile-div-right-side-about_me">
                        <form onSubmit={this.handleAboutMe}>
                            <div className="profile-div-right-side-about_me">
                                <label>About Me</label>
                                <p className="w3-opacity card-background">
                            <textarea rows="13" cols="20"
                                      className="w3-input w3-opacity w3-text-white input-transparent"
                                      type="text" name='about_me' onChange={this.handleDataChange} value={(() => {
                                try {
                                    return this.props.data.profile.about_me
                                } catch (e) {
                                    console.log(e)
                                }
                            })()}></textarea>
                                </p>
                            </div>
                            <div className=" w3-center profile-div-right-side-about_me top-margin-60">
                                <button className="w3-btn w3-ripple" id="btn-profile-about_me" type='submit'>Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.profile.loading,
        data: state.profile.data,
        email: state.login.email
    }
};

const matchDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(fetchProfile()),
        sendData: (data) => dispatch(sendProfile(data))
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Profile))
