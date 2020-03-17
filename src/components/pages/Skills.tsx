import React, { Component, ReactNode } from 'react';

interface SkillLevel {
    level: string;
    skills: string[];
}

interface Skillset {
    label: string;
    children: SkillLevel[];
}

class Skills extends Component {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    private static readonly MAX_NUMBER_OF_COLS: number = 12;

    private _skills: Skillset[] = [
        {
            label: 'Information Technology',
            children: [
                {
                    level: 'Basic',
                    skills: [
                        'C++',
                        'C',
                        'MATLAB',
                        'AVR Assembly',
                        'Django',
                        'Angular',
                        'React Native',
                        'Laravel',
                        'LaTeX',
                        'C#'
                    ]
                },
                {
                    level: 'Intermediate',
                    skills: ['Python', 'Linux', 'Windows', 'MySQL', 'CSS', 'Java FX', 'Git', 'Typescript']
                },
                {
                    level: 'Advanced',
                    skills: ['Java', 'PHP (Object-Oriented)', 'HTML']
                }
            ]
        },
        {
            label: 'Languages',
            children: [
                {
                    level: 'Basic',
                    skills: ['Russian']
                },
                {
                    level: 'Intermediate',
                    skills: ['Spanish']
                },
                {
                    level: 'Advanced',
                    skills: ['English']
                },
                {
                    level: 'Native',
                    skills: ['Dutch']
                }
            ]
        }
    ];

    private renderSkillLevel(skillLevel: SkillLevel, index: number, width: number): ReactNode {
        return (
            <div className={`float-left col-${width}`} key={index}>
                <div className="skill-header">{skillLevel.level}</div>
                <ul className="skill-list">
                    {skillLevel.skills.map((skill: string, skillIndex: number) => (
                        <li key={skillIndex}>{skill}</li>
                    ))}
                </ul>
            </div>
        );
    }

    private renderSkillset(skillset: Skillset, index: number): ReactNode {
        return (
            <div className="mt-sm-4" key={index}>
                <h2>{skillset.label}</h2>

                {skillset.children.map((skillLevel: SkillLevel, levelIndex: number) =>
                    this.renderSkillLevel(skillLevel, levelIndex, Skills.MAX_NUMBER_OF_COLS / skillset.children.length)
                )}

                <br className="clear" />
            </div>
        );
    }

    public render(): ReactNode {
        return (
            <div>
                <h1>Skills and technologies</h1>
                {this._skills.map((skillset: Skillset, index: number) => this.renderSkillset(skillset, index))}
            </div>
        );
    }
}

export default Skills;
