import React, { Component, ReactNode } from 'react';

import DraiWikiScreenshot from '../../assets/images/portfolio_draiwiki.png';
import EnjunScreenshot from '../../assets/images/portfolio_enjun.png';
import HiLangScreenshot from '../../assets/images/portfolio_hilang.png';
import PortfolioWebsiteScreenshot from '../../assets/images/portfolio_robertmonden.png';

interface Project {
    image: string;
    title: string;
    description: string[];
    github?: string;
    skills: string[];
    dates: string[];
}

class Projects extends Component {
    private _projects: Project[] = [
        {
            image: PortfolioWebsiteScreenshot,
            title: 'Personal portfolio website',
            description: [
                'My personal portfolio website is the website you are currently visiting. Due to a positive experience with Angular, I decided to rewrite my existing portfolio website (which left pretty much everything to be desired) using Angular 6.'
            ],
            skills: ['Typescript', 'Angular 6', 'HTML', 'CSS'],
            dates: ['September 2018', 'present']
        },
        {
            image: DraiWikiScreenshot,
            title: 'DraiWiki - open source wiki software',
            description: [
                'DraiWiki is a free and open source wiki software written in PHP 7.2. It was designed to be secure, customizable and easy to use. The software makes extensive use of other open source packages.',

                'Authorization is implemented using a permission system, in which all users can be assigned one or more permission profiles, which are determined by the groups the user is a member of.',

                'As customization was a high priority, localization and styling is very easy. The software supports multiple languages and it is very easy to switch between them.'
            ],
            github: 'nedroden/DraiWiki',
            skills: ['PHP (OOP)', 'MySQL', 'Javascript', 'HTML', 'CSS', 'Git'],
            dates: ['February 2017', 'July 2018']
        },
        {
            image: HiLangScreenshot,
            title: 'HiLang - language learning infrastructure',
            description: [
                "In the second half of the second semester a couple of other students and I decided to build a language learning infrastructure (consisting of an API, web interface and a mobile app) as that block's project.",

                'With HiLang, courses can be created by so-called "distributors" and can be enrolled to by other users. Courses consist of vocabulary lists and grammar, both of which can be practiced through exercises.'
            ],
            github: 'RockingStars/Enjun',
            skills: ['Python', 'Django', 'Angular', 'REST', 'React Native', 'App development'],
            dates: ['May-June 2018']
        },
        {
            image: EnjunScreenshot,
            title: 'Reversi and Tic Tac Toe with AI',
            description: [
                'In late March 2018, three other students and I developed, as part of a school project, a simple game framework. Using this game framework, we developed two games, both with an AI: reversi and tic tac toe.',
                "At the end of the project there was a tournament, where groups had their AI play against other groups' AIs. We finished fourth."
            ],
            github: 'RockingStars/Enjun',
            skills: ['Java', 'Java FX', 'Git', 'Scrum', 'Networking (TCP)', 'AI'],
            dates: ['March 2018']
        }
    ];

    private renderProject(project: Project): ReactNode {
        return (
            <div className="project">
                <div className="float-left col-3 valign-top">
                    <img src={project.image} alt="Screenshot" className="project-screenshot" />
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
                <h1>Projects</h1>
                {this._projects.map((project: Project) => this.renderProject(project))}
            </div>
        );
    }
}

export default Projects;
