import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="w3-card-4 w3-padding-large contact-div card-background" id="contact">
                <div className="w3-center w3-left w3-cell w3-cell-middle contact-div-left-side">
                    <p>
                        <h3 className="w3-center"><b>Contact</b></h3>
                        <p className="w3-opacity">
                            Machine learning is the scientific study of algorithms and statistical models that computer
                            systems use to perform a specific task without using explicit instructions, relying on
                            patterns
                            and inference instead. It is seen as a subset of artificial intelligence.
                        </p>
                    </p>
                    <br/>
                    <p>
                        <h4>Address</h4>
                        <p className="w3-opacity">
                            Mindelsohn Way, Birmingham B15 2TH, United Kingdom
                        </p>
                    </p>

                    <p>
                        <h4>Phone</h4>
                        <p className="w3-opacity">
                            +98 938 341 19 67
                        </p>
                    </p>

                    <p>
                        <h4>E-mail</h4>
                        <p className="w3-opacity">
                            Mohammad.h4s4ni@gmail.com
                        </p>
                    </p>
                </div>
                <div
                    className="w3-card-4 w3-right w3-cell w3-cell-middle w3-padding-large contact-div-right-side card-background">
                    <p>
                        <h3 className="w3-center"><b>Contact Form</b></h3>
                    </p>
                    <br/><br/>
                    <form action="#" className="w3-opacity">
                        <label>Your Name</label>
                        <input className="w3-input w3-opacity w3-text-white input-transparent" type="text"/>
                        <br/>
                        <label>Your Email</label>
                        <input className="w3-input w3-opacity w3-text-white input-transparent" type="text"/>
                        <br/>
                        <label>Your Phone</label>
                        <input className="w3-input w3-opacity w3-text-white input-transparent"
                               type="text"/>
                        <br/>
                        <label>Message</label>
                        <textarea rows="3" cols="20"
                                  className="w3-input w3-opacity w3-text-white input-transparent"
                                  type="text"></textarea>

                        <br/>
                        <p className="w3-center">
                            <button className="w3-btn w3-ripple"
                                    id="btn-contact-send">Send
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact