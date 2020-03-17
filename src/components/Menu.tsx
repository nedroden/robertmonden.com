import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
    label?: string;
    href?: string;
    external?: boolean;
}

interface State {
    items: MenuItem[];
}

class Menu extends Component<{}, State> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            items: []
        };
    }

    public componentDidMount(): void {
        this.setState({
            items: [
                { label: 'Home', href: '/' },
                { label: 'Projects', href: '/portfolio' },
                { label: 'Education', href: '/education' },
                { label: 'Skills', href: '/skills' },
                { label: 'Biography', href: '/bio' },
                { label: 'Contact', href: '/contact' },
                {},
                {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/robert-monden/',
                    external: true
                },
                {
                    label: 'Github',
                    href: 'https://github.com/nedroden',
                    external: true
                },
                {
                    label: 'Download resume',
                    href: 'https://robertmonden.com/files/resume.pdf',
                    external: true
                }
            ]
        });
    }

    private renderMenuItem(key: number, item: MenuItem): ReactNode {
        return (
            <li key={key} className="menu-item">
                {item.label && !item.external ? (
                    <Link to={`${item.href}`} className="menu-item-url">
                        {item.label}
                    </Link>
                ) : null}
                {item.label && item.external ? (
                    <a href={item.href} className="menu-item-url" target="_blank" rel="noopener noreferrer">
                        {item.label}
                    </a>
                ) : null}

                {!item.label ? (
                    <span>
                        <hr className="menu-item-hr" />
                    </span>
                ) : null}
            </li>
        );
    }

    public render(): ReactNode {
        let key = 0;

        return (
            <div>
                <ul id="menu">{this.state.items.map((item: MenuItem) => this.renderMenuItem(key++, item))}</ul>
            </div>
        );
    }
}

export default Menu;
