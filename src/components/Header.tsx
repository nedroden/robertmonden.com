import React, { Component, ReactNode } from 'react';

class Header extends Component {
    public render(): ReactNode {
        return (
            <div>
                <div className="topbar">
                    <a href="/" id="topbar-url">
                        robertmonden.com
                    </a>
                </div>

                <div id="header"></div>
            </div>
        );
    }
}

export default Header;
