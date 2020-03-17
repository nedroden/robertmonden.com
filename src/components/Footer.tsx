import React, { Component, ReactNode } from 'react';

class Footer extends Component {
    public render(): ReactNode {
        return (
            <div id="footer">
                &copy; 2018-2019, Robert Monden
                <br />
                Header image by Yousef Espanioly on Unsplash
            </div>
        );
    }
}

export default Footer;
