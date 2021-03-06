import React, { Component, ReactNode } from 'react';

class Footer extends Component {
    public render(): ReactNode {
        return (
            <div id="footer">
                &copy; 2018-2020, Robert Monden
                <br />
                Header image by <em>Muhammad Fahad Khan</em> on Unsplash
            </div>
        );
    }
}

export default Footer;
