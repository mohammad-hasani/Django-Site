import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchTitles, fetchStory} from "../redux/story/actions";


class Story extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.sendSearch({'all': true});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendSearch(this.state);
    };

    handleDataChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    handleOnSearchItemClick = (item) => {
        const id = item.id;
        const data = {
            id: id
        }
        this.props.fetchStory(data)

    }

    render() {
        console.log(this.props.story)
        return (
            <div className="w3-card-4 story-div card-background" id="story">
                <div className="story-div-left-side">
                    <div className="story-div-left-side-icon">
                        <i className="w3-right w3-cell-middle fa fa-chevron-right right-search-btn"></i>
                    </div>
                    <div className="story-div-left-side-list">
                        <p>
                            <h3 className="w3-center"><b>Story</b></h3>
                        </p>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input className="w3-input w3-opacity w3-text-white input-transparent search-input"
                                       type="text" name='search' onChange={this.handleDataChange}/>
                                <button className="w3-btn w3-ripple search-input-button" id="btn-story-search"
                                        type='submit'>
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="w3-padding story-div-left-side-story_list custom-scroll">
                            <ul className="w3-ul">
                                {(() => {
                                    try {
                                        return this.props.titles.map(item => {
                                            return <li onClick={() => this.handleOnSearchItemClick(item)}
                                                       className="item li-link" key={item.id}>{item.title}</li>
                                        })
                                    } catch (e) {
                                    }
                                })()}

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w3-padding story-div-right-side custom-scroll">
                    {(() => {
                            try {
                                {
                                    return Object.entries(this.props.story).map(([key, value]) => {
                                        return <p key={key}><b>{key}:</b> {value}</p>
                                    })
                                }

                            } catch
                                (e) {
                            }
                        }
                    )()}

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.story.loading,
        titles: state.story.titles,
        story: state.story.story
    }
};

const matchDispatchToProps = dispatch => {
    return {
        sendSearch: data => dispatch(fetchTitles(data)),
        fetchStory: data => dispatch(fetchStory(data))
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(Story)