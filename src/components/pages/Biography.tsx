import React, { Component, ReactNode } from 'react';

import photo from '../../assets/images/biography.jpg';
import Heading from '../elements/Heading';

class Biography extends Component {
    public render(): ReactNode {
        return (
            <div>
                <Heading text="Biography" />
                <div className="float-left col-2">
                    <img src={photo} alt="August 2019, Kazan, Russia." className="portrait" />
                </div>
                <div className="float-left col-10">
                    <p>
                        On September 8th, 1996, I was born at the Delfzicht hospital in Delfzijl, the Netherlands. At
                        the age of 11, I started high school (VMBO TL+) at the Hogelandcollege in Uithuizen. During my
                        time in high school I also learned how to program in PHP, mainly by modifying small parts of the
                        code of Simple Machines Forum, an open-source forum software that is still available today. The
                        people there have inspired me greatly.
                    </p>

                    <p>
                        In my fourth and last year I still did not know exactly what I wanted to do with my life. Since
                        living in Spain was my dream, I enrolled for the study MBO Front Office Management at the
                        Noorderpoortcollege in Groningen. Although the original plan was to do the second year
                        internship (10 weeks) in Spain, that did not happen. After a job event in the third year, I knew
                        exactly where in Spain I wanted to go for my third year internship: Galicia. With a lot of help
                        from my Spanish teacher, I got the opportunity to do not just the third year internship in
                        Spain, but the fourth year internship as well. These ten months were an amazing experience, an
                        experience that has definitely changed me for the better. Since completing the internship I have
                        come back three times.
                    </p>

                    <p>
                        Although the internship was an amazing experience, in the second year I knew that continuing in
                        the world of hospitality was not for me. During the internship, I had a plan to work as a
                        freelance PHP developer after graduating. In March 2016, however, I was looking through some
                        websites and I started considering to keep studying. Although the plan was never to start with
                        an HBO study, the idea of studying IT at the Hanze University of Applied Sciences was quite
                        appealing. After completing the math entrance exam required for MBO4 students, I knew I made the
                        right choice.
                    </p>
                </div>
                <br className="clear" />
            </div>
        );
    }
}

export default Biography;
