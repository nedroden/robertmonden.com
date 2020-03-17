import './assets/css/Theme.css';

import React, { Component, ReactNode } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Biography from './components/pages/Biography';
import Homepage from './components/pages/Homepage';

class App extends Component {
    public render(): ReactNode {
        return (
            <div>
                <div id="wrapper">
                    <Header />

                    <div id="content">
                        <BrowserRouter>
                            <div id="left-column">
                                <Menu />
                            </div>
                            <div id="right-column">
                                <Switch>
                                    <Route path="/bio">
                                        <Biography />
                                    </Route>
                                    <Route path="/">
                                        <Homepage />
                                    </Route>
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;
