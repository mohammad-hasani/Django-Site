import React, {Component} from 'react';

import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {getStory} from '../redux/actions/storyAction'

class Test extends Component {
    createList() {
        // return this.props.story.map((s) =>{
            return (
                <li key={'asd'} onClick={() => this.props.getStory()}>adsfdsafasdfdas</li>
            );
        // });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.createList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        story: state.story
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getStory: getStory}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Test);