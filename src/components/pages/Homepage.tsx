import moment, { Moment } from 'moment';
import React, { Component, ReactNode } from 'react';

import Line from '../elements/Line';
import Blog from './Blog';

class Homepage extends Component {
    public render(): ReactNode {
        const birthdate: Moment = moment();

        return (
            <div id="homepage">
                <h1 id="hello">
                    I am <span id="hello-name">Robert.</span>
                </h1>
                <h2 id="position">MSc Computing Science Student</h2>

                <Line />

                <p className="head">
                    Howdy! I am Robert Monden, a {birthdate.diff('1996-09-08', 'years', false)}-year old master's
                    student of Computing Science with a passion for learning, programming, languages and movies.
                </p>

                <Line />
                <Blog />
            </div>
        );
    }
}

export default Homepage;
