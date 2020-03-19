import React, { Component, ReactNode } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

interface MenuItem {
    icon?: string;
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
                { label: 'Home', icon: 'home', href: '/' },
                { label: 'Projects', icon: 'code', href: '/portfolio' },
                { label: 'Education', icon: 'university', href: '/education' },
                { label: 'Skills', icon: 'home', href: '/skills' },
                { label: 'Biography', icon: 'book', href: '/bio' },
                { label: 'Contact', icon: 'address-book', href: '/contact' },
                {},
                {
                    label: 'LinkedIn',
                    icon: 'linkedin',
                    href: 'https://www.linkedin.com/in/robert-monden/',
                    external: true
                },
                {
                    label: 'Github',
                    icon: 'github',
                    href: 'https://github.com/nedroden',
                    external: true
                },
                {
                    label: 'Resume',
                    icon: 'file-text',
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
                        <FontAwesome name={item.icon ?? 'question'} className="menu-icon" /> {item.label}
                    </Link>
                ) : null}
                {item.label && item.external ? (
                    <a href={item.href} className="menu-item-url" target="_blank" rel="noopener noreferrer">
                        <FontAwesome name={item.icon ?? 'question'} className="menu-icon" /> {item.label}
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
