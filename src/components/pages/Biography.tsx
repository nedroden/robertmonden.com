import React, { Component, ReactNode } from 'react';
import moment, { Moment } from 'moment';

import photo from '../../assets/images/biography.jpg';
import Heading from '../elements/Heading';

class Biography extends Component {
    public render(): ReactNode {
        const birthdate: Moment = moment();

        return (
            <div>
                <Heading text="Biography" />
                <div className="float-left col-2">
                    <img src={photo} alt="November 2019, the Netherlands." className="portrait" />
                </div>
                <div className="float-left col-10">
                    <p>
                        Hey! I'm Robert, {birthdate.diff('1996-09-08', 'years', false)} years old and a master's student
                        of Computing Science at the University of Groningen. I currently live in Groningen, the
                        Netherlands.
                    </p>

                    <p>
                        On September 8th, 1996, I was born at the Delfzicht hospital in Delfzijl. At the age of 11, I
                        started high school (VMBO TL+) at the Hogelandcollege in Uithuizen. During my time in high
                        school I also learned how to program in PHP, mainly by modifying parts of the source code of{' '}
                        <em>Simple Machines Forum</em> (SMF). SMF is an open-source forum software that is still
                        available today. The people there have inspired me greatly.
                    </p>

                    <p>
                        Not knowing what I wanted to do with my life, I decided to study Front Office Management at the
                        Noorderpoortcollege in Groningen. Dreaming of living in Spain one day, my plan was to do one of
                        the internships there. With a lot of help from my Spanish teacher, I got the opportunity to do
                        not just the third-year internship in Spain, but the fourth-year internship as well. I ended up
                        spending ten months in the <em>comunidad</em> of Galicia. Since completing the internship I have
                        revisited Galicia at least three times.
                    </p>

                    <p>
                        As much as the internship was a fantastic experience, already in the second year of my studies I
                        knew that continuing in the world of hospitality was not something I wanted to do. During the
                        internship I had a plan to work as a freelance PHP developer after graduation. However, in March
                        2016 I started considering to keep studying. While my original plan was never continuing with an
                        HBO-level study, the idea of studying IT at the Hanze University of Applied Sciences was quite
                        appealing.
                    </p>

                    <p>
                        During my time at Hanze I learned a lot about software development. My third-year internship
                        concerned the development of a cross-platform mobile application, while my graduation project
                        involved finding a way to automate accessibility assessment based on the{' '}
                        <em>Web Content Accessibility Guidelines</em> (WCAG).
                    </p>

                    <p>
                        In June 2020 I graduated from Hanze. Having already completed the pre-master's program during
                        the minor period of my bachelor's degree, I then enrolled at the University of Groningen for the
                        Computing Science master's program.
                    </p>
                </div>
                <br className="clear" />
            </div>
        );
    }
}

export default Biography;
