import React, { Component, ReactNode } from 'react';

import Line from '../elements/Line';

class Homepage extends Component {
    public render(): ReactNode {
        return (
            <div id="homepage">
                <h1 id="hello">
                    I am <span id="hello-name">Robert.</span>
                </h1>
                <h2 id="position">Software Engineering Student</h2>

                <Line />

                <p className="head">
                    Howdy! I am Robert Monden, a twenty-three-year old student of HBO-ICT Software Engineering with a
                    passion for learning, programming, languages and movies.
                </p>
            </div>
        );
    }
}

export default Homepage;
