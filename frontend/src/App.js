import React, {Component} from 'react';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import {CSSTransition, TransitionGroup} from "react-transition-group";

import Header from './components/ComponentHeader';
import Login from './components/ComponentLogin';
import Register from './components/ComponentRegister';
import Contact from './components/ComponentContact';
import Profile from "./components/ComponentProfile";
import Story from "./components/ComponentStory";

import BackgroundAbstract from "./scripts/design/ComponentBackgroundAbstract";

import './css/fade-animes.css'
import './css/design.css'


import Test from "./components/ComponentTest";

class App extends Component {

    render() {
        return (
            <div className="root_div">
                <BackgroundAbstract/>
                <div className="w3-container w3-text-white main-div">
                    <BrowserRouter>
                        <div className="w3-container menu-up">
                            <div className="w3-right">
                                <Header/>
                            </div>
                        </div>
                        <div className="down-part">
                            <div className="page">
                                <Route render={({location}) => (
                                    <TransitionGroup>
                                        <CSSTransition
                                            key={location.key}
                                            timeout={2000}
                                            classNames='fade'>
                                            <Switch location={location}>
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
                                        </CSSTransition>
                                    </TransitionGroup>
                                )}/>
                            </div>
                        </div>
                    </BrowserRouter>
                </div>

            </div>

        );
    }
}

export default App;
