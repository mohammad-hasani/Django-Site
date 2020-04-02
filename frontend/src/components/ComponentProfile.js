import React, {Component} from 'react';

import { withRouter } from "react-router";


class Profile extends Component {

    pageChangeHandler = (page, e) => {
        let unblock = this.props.history.block();
        location.href = page;
        unblock();
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
                                Sina
                            </p>
                        </div>
                        <div className="profile-div-right-side-profile">
                            <h5>Email</h5>
                            <p className="w3-opacity">
                                Mohammad.h4s4ni@gmail.com
                            </p>
                        </div>
                        <div className="profile-div-right-side-profile">
                            <h5>About Me</h5>

                            <p className="w3-opacity"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores autem, eligendi ex facere fugit hic illum odio praesentium similique. Atque blanditiis cumque molestiae tempora? Ex modi quam reiciendis soluta?</span><span>Aliquid consectetur maxime non nostrum, nulla odio? Accusantium beatae earum eum iure minima molestiae natus quasi ratione voluptas voluptatem. Ad asperiores beatae deserunt doloribus labore neque quidem sed? Dolor, tempore.</span><span>Accusamus amet assumenda aut autem commodi dicta earum eligendi eos esse eum eveniet explicabo fugit illum ipsa nam natus nisi nostrum odio qui quia reiciendis repellat tenetur, ut vel voluptatum?</span>
                            </p>

                        </div>
                    </div>
                    <div className="profile-tab" id="profile-div-right-side-change_info">
                        <form>
                            <div className="profile-div-right-side-change_info">
                                <label>Username</label>
                                <p className="w3-opacity">
                                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="text"/>
                                </p>
                            </div>

                            <div className=" w3-center profile-div-right-side-change_info top-margin-60">
                                <button className="w3-btn w3-ripple" id="btn-profile-change_info">Send</button>
                            </div>

                        </form>
                    </div>
                    <div className="profile-tab" id="profile-div-right-side-password">
                        <form>
                            <div className="profile-div-right-side-change_info">
                                <label>Old Passsword</label>
                                <p className="w3-opacity">
                                    <input className="w3-input w3-opacity w3-text-white input-transparent" type="text"/>
                                </p>
                            </div>
                            <div className="profile-div-right-side-password">
                                <label>New Password</label>
                                <p className="w3-opacity">
                                    <input className="w3-input w3-opacity w3-text-white input-transparent"
                                           type="email"/>
                                </p>
                            </div>

                            <div className="profile-div-right-side-password">
                                <label>Confirm New Password</label>
                                <p className="w3-opacity">
                                    <input className="w3-input w3-opacity w3-text-white input-transparent"
                                           type="email"/>
                                </p>
                            </div>

                            <div className=" w3-center profile-div-right-side-password top-margin-60">
                                <button className="w3-btn w3-ripple" id="btn-profile-password">Send</button>
                            </div>

                        </form>
                    </div>
                    <div className="profile-tab" id="profile-div-right-side-about_me">
                        <form>
                            <div className="profile-div-right-side-about_me">
                                <label>About Me</label>
                                <p className="w3-opacity card-background">
                            <textarea rows="13" cols="20"
                                      className="w3-input w3-opacity w3-text-white input-transparent"
                                      type="text"></textarea>
                                </p>
                            </div>
                            <div className=" w3-center profile-div-right-side-about_me top-margin-60">
                                <button className="w3-btn w3-ripple" id="btn-profile-about_me">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Profile)