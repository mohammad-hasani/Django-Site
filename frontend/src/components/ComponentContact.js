import React, {Component} from 'react';
import {connect} from "react-redux";

import {
    fetchContactInfo,
    sendContactInfo
} from '../redux/contact/actions'

import {convertStringTOList} from "../scripts/general/helper";

class Contact extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendData(this.state);
    };

    handleDataChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div className="w3-card-4 w3-padding-large contact-div card-background" id="contact">
                <div className="w3-center w3-left w3-cell w3-cell-middle contact-div-left-side">
                    <p>
                        <h3 className="w3-center"><b>Contact</b></h3>
                        <p className="w3-opacity">
                            {this.props.data.body}
                        </p>
                    </p>
                    <br/>
                    <p>
                        <h4>Address</h4>
                        <p className="w3-opacity">
                            {this.props.data.address}
                        </p>
                    </p>

                    <p>
                        <h4>Phone</h4>
                        <p className="w3-opacity">
                            {(() => {
                                const phones = convertStringTOList(this.props.data.phone);
                                if (phones !== null) {
                                    return phones.map(item => {
                                        return <p>{item}</p>
                                    })
                                }
                            })()}
                        </p>
                    </p>

                    <p>
                        <h4>E-mail</h4>
                        <p className="w3-opacity">
                            {(() => {
                                const emails = convertStringTOList(this.props.data.email);
                                if (emails !== null) {
                                    return emails.map(item => {
                                        return <p>{item}</p>
                                    })
                                }
                            })()}
                        </p>
                    </p>
                </div>
                <div
                    className="w3-card-4 w3-right w3-cell w3-cell-middle w3-padding-large contact-div-right-side card-background">
                    <p>
                        <h3 className="w3-center"><b>Contact Form</b></h3>
                    </p>
                    <br/>
                    <form onSubmit={this.handleSubmit} className="w3-opacity">
                        <label>Your Name</label>
                        <input className="w3-input w3-opacity w3-text-white input-transparent" type="text"
                        onChange={this.handleDataChange} name='name'/>
                        <br/>
                        <label>Your Email</label>
                        <input className="w3-input w3-opacity w3-text-white input-transparent" type="text"
                        onChange={this.handleDataChange} name='email'/>
                        <br/>
                        <label>Your Phone</label>
                        <input className="w3-input w3-opacity w3-text-white input-transparent"
                               type="text" onChange={this.handleDataChange} name='phone'/>
                        <br/>
                        <label>Message</label>
                        <textarea rows="3" cols="20"
                                  className="w3-input w3-opacity w3-text-white input-transparent"
                                  type="text" onChange={this.handleDataChange} name='message'></textarea>

                        <br/>
                        <p className="w3-center">
                            <button className="w3-btn w3-ripple" type='submit'>Send
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.contact.loading,
        data: state.contact.data
    }
};

const matchDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchContactInfo()),
        sendData: data => dispatch(sendContactInfo(data))
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(Contact);