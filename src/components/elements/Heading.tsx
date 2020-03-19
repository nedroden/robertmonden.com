import React, { Component, ReactNode } from 'react';

interface Props {
    text: string;
}

class Heading extends Component<Props> {
    public render(): ReactNode {
        return <h1 className="heading">{this.props.text}</h1>;
    }
}

export default Heading;
