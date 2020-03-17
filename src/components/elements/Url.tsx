import React, { Component, ReactNode } from 'react';

interface Props {
    label: string;
    href: string;
    target?: string;
}

class Url extends Component<Props> {
    public render(): ReactNode {
        return (
            <a className="url" href="{this.props.href}" target="{this.props.target || '_blank'}">
                {this.props.label}
            </a>
        );
    }
}

export default Url;
