import React, { Component, ReactNode } from 'react';

import Heading from '../elements/Heading';

interface Detail {
    label: string;
    value: string;
    isUrl?: boolean;
}

class Contact extends Component {
    private _details: Detail[] = [
        { label: 'Name', value: 'Robert Monden' },
        { label: 'Phone number', value: '+31 6 249 696 89' },
        { label: 'Email', value: 'robert [at] robertmonden [dot] com' },
        { label: 'LinkedIn', value: 'https://linkedin.com/robert-monden', isUrl: true },
        { label: 'GitHub', value: 'https://github.com/nedroden', isUrl: true }
    ];

    private renderDetail(detail: Detail, index: number): ReactNode {
        return (
            <div key={index}>
                <div className="info-left">{detail.label}:</div>
                {!detail.isUrl ? (
                    <div className="info-right">{detail.value}</div>
                ) : (
                    <div className="info-right">
                        <a href={detail.value} target="_blank" rel="noopener noreferrer">
                            {detail.value}
                        </a>
                    </div>
                )}

                <br className="clear" />
            </div>
        );
    }

    public render(): ReactNode {
        return (
            <div>
                <Heading text="Robert Monden" />
                <div id="contact">
                    {this._details.map((detail: Detail, index: number) => this.renderDetail(detail, index))}
                </div>
            </div>
        );
    }
}

export default Contact;
