import React, {Component} from 'react';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Header from './components/ComponentHeader';
import Login from './components/ComponentLogin';
import Register from './components/ComponentRegister';
import Contact from './components/ComponentContact';
import Profile from "./components/ComponentProfile";
import Story from "./components/ComponentStory";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: null
        }
    }

    changeComponent = (page) => {
        window.alert(page);
    };

    render() {
        return (
            <div className="w3-container w3-text-white main-div">
                <BrowserRouter>
                    <div className="w3-container w3-right menu-up">
                        <Header changeComponent={this.changeComponent}/>
                    </div>
                    <div className="w3-display-middle">
                        <Switch>
                            <Route path="/login">
                                <Login/>
                            </Route>
                            <Route path="/register">
                                <Register/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route>
                            <Route path="/profile">
                                <Profile/>
                            </Route>
                            <Route path="/story">
                                <Story/>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;
