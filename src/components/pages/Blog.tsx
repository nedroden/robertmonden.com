import axios, { AxiosResponse } from 'axios';
import moment, { Moment } from 'moment';
import React, { Component, ReactNode } from 'react';

import photo from '../../assets/images/biography.jpg';
import Post from '../../models/Post';
import Line from '../elements/Line';

type Props = {};

interface State {
    blogs: Post[];
}

export default class Blog extends Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = { blogs: [] };
    }

    public componentDidMount(): void {
        this.loadBlogPosts();
    }

    private async loadBlogPosts(): Promise<void> {
        const response: AxiosResponse = await axios.get('https://robertmonden.com/_blog/wp-json/wp/v2/posts');

        const blogs: Post[] = [];
        response.data.forEach((item: any) =>
            blogs.push(
                new Post().deserialize({
                    title: item.title.rendered,
                    date: item.date,
                    content: item.content.rendered,
                    link: item.link
                })
            )
        );

        this.setState({ blogs });
    }

    private renderBlogPost(post: Post, index: number): ReactNode {
        const date: Moment = moment(post.date);

        return (
            <div key={index} className="blog-post">
                <a href={post.link}>
                    <h1 className="blog-title" dangerouslySetInnerHTML={{ __html: post.title || '' }}></h1>
                </a>

                <div className="user-info">
                    <img className="avatar" src={photo} alt="Avatar" />
                    Posted by{' '}
                    <a href="https://robertmonden.com/_blog/author/robert/" target="_blank" rel="noopener noreferrer">
                        Robert
                    </a>{' '}
                    on {date.format('MMMM Do YYYY, h:mm:ss a')}
                </div>

                <Line />

                <div dangerouslySetInnerHTML={{ __html: post.content || '' }}></div>

                <div className="float-right">
                    Posted {date.fromNow()} |{' '}
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                </div>

                <br className="clear" />
            </div>
        );
    }

    public render(): ReactNode {
        if (!this.state.blogs || this.state.blogs.length === 0) {
            return <p>Loading articles...</p>;
        }

        return <div>{this.state.blogs.map((post: Post, index: number) => this.renderBlogPost(post, index))}</div>;
    }
}
