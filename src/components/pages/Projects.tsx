import React, { Component, ReactNode } from 'react';

import PortfolioProjects from '../../data/Projects.json';
import Project from '../../models/Project';
import Heading from '../elements/Heading';

interface State {
    projects: Project[];
}

class Projects extends Component<{}, State> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            projects: []
        };
    }

    public componentDidMount(): void {
        const projects: Project[] = PortfolioProjects.data.map((project: any) => new Project().deserialize(project));

        this.setState({ projects });
    }

    private renderProject(project: Project): ReactNode {
        if (!project.description || !project.skills || !project.dates || !project.image) {
            return <div />;
        }

        return (
            <div className="project">
                <div className="float-left col-3 valign-top">
                    <img
                        src={require(`../../assets/images/${project.image}`)}
                        alt="Screenshot"
                        className="project-screenshot"
                    />
                </div>

                <div className="float-left col-9">
                    <h2 className="project-title">{project.title}</h2>
                    {project.description.map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <div className="project-technologies">
                        <span>
                            {project.github ? (
                                <a
                                    href={`https://github.com/${project.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View repository
                                </a>
                            ) : (
                                'Repository unavailable'
                            )}
                        </span>
                        | <strong>Skills:</strong> {project.skills.join(', ')} | <strong>Date:</strong>{' '}
                        {project.dates.join(' - ')}
                    </div>
                </div>

                <br className="clear" />
            </div>
        );
    }

    public render(): ReactNode {
        return (
            <div>
                <Heading text="Projects" />
                {this.state.projects.map((project: Project) => this.renderProject(project))}
            </div>
        );
    }
}

export default Projects;
