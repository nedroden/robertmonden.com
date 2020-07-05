import React, { Component, ReactNode } from 'react';

import Heading from '../elements/Heading';

class Education extends Component {
    public render(): ReactNode {
        return (
            <div>
                <Heading text="Education" />
                <p>Academic years and semesters go downwards, studies go upwards.</p>

                <h2 className="section_header">
                    MSc. Computing Science - <span className="location">University of Groningen</span>
                </h2>
                <h4 className="subsection_header">
                    First academic year - <span className="location">2020-2021</span>
                </h4>
                <section>Not started yet.</section>

                <h2 className="section_header">
                    HBO-ICT: Software Engineering -{' '}
                    <span className="location">Hanze University of Applied Sciences</span>
                </h2>
                <h4 className="subsection_header">
                    First academic year - <span className="location">2016-2017</span>
                </h4>
                <section>
                    <h5>Semester 1a: Website development</h5>
                    <span className="description">
                        Designing and building web applications, using PHP and Oracle SQL. In this block we were also
                        introduced to UML. Since I had previous experience with web development, I joined the advanced
                        group (<em>plusroute</em> in Dutch), which meant my curriculum for this block was slightly
                        different. Any deviations from the regular program are marked by an asterisk.
                    </span>

                    <hr />

                    <ul className="curriculum">
                        <li>
                            <strong>Databases 1</strong> Learning how to create Entity Relational Diagrams in Oracle
                            Data Modeler. We were also introduced to UML and Oracle SQL.
                        </li>
                        <li>
                            <strong>Web-programming*</strong> Introduction to Object-Oriented Programming and frameworks
                            in PHP.
                        </li>
                        <li>
                            <strong>Intercultural Compentencies</strong> Elementary grammar. A few other students and I
                            wrote an information document about the (academic) culture of Pune, India.
                        </li>
                        <li>
                            <strong>Communication skills</strong> Developing presentational skills (in Dutch).
                        </li>
                        <li>
                            <strong>Project management 1</strong> Introduction to Scrum.
                        </li>
                        <li>
                            <strong>Project*</strong> Developing a Colloquium app in Laravel with other 18 students.
                        </li>
                    </ul>
                </section>

                <section>
                    <h5>Semester 1b: Design and build</h5>
                    <span className="description">Designing and building desktop applications in Java.</span>

                    <hr />

                    <ul className="curriculum">
                        <li>
                            <strong>Configuration Management</strong> Version control using Git.
                        </li>
                        <li>
                            <strong>Human-Computer Interaction</strong> An introduction to designing easy-to-use systems
                            with intuitive controls.
                        </li>
                        <li>
                            <strong>Object-Oriented Programming in Java</strong> Basic object-oriented programming in
                            Java.
                        </li>
                        <li>
                            <strong>Math</strong> Basic linear algebra, graphs and logarithms.
                        </li>
                        <li>
                            <strong>Project Management 2</strong> How to take on a large project and ensure the desired
                            goals are achieved quickly and efficiently.
                        </li>
                        <li>
                            <strong>Project</strong> Taking a prototype parking garage simulator and turning it into a
                            fully-functional simulator program.
                        </li>
                    </ul>
                </section>

                <section>
                    <h5>Semester 2a: ITSM and Security</h5>
                    <span className="description">
                        An brief introduction to operating systems and networking protocols.
                    </span>

                    <hr />

                    <ul className="curriculum">
                        <li>
                            <strong>Networking</strong> Basic networking protocols, such as TCP, UDP, HTTP.
                        </li>
                        <li>
                            <strong>Operating Systems</strong> How does some of the most important functionality in
                            modern operating systems work?
                        </li>
                        <li>
                            <strong>Security Awareness</strong> How to manage security in organizations and
                            avoid/minimize the impact of security risks.
                        </li>
                        <li>
                            <strong>IT Service Management</strong> An introduction to management in IT environments.
                        </li>
                        <li>
                            <strong>Intercultural Competencies</strong> Developing email writing and interview skills in
                            English.
                        </li>
                        <li>
                            <strong>Introduction to Practical Research</strong> A brief introduction to the most
                            important concepts of research.
                        </li>
                        <li>
                            <strong>Communication skills</strong> Basic communication skills and how to hold an
                            effective meeting.
                        </li>
                        <li>
                            <strong>Project</strong> Setup a server architecture consisting of four Windows
                            Server-powered virtual machines.
                        </li>
                    </ul>
                </section>

                <section>
                    <h5>Semester 2b: Data Analysis and Visualization</h5>
                    <span className="description">
                        Visualization of data and drawing conclusions based on data analyses.
                    </span>

                    <hr />

                    <ul className="curriculum">
                        <li>
                            <strong>Databases 2</strong> Advanced SQL, such as PL/SQL, functions and procedures.
                        </li>
                        <li>
                            <strong>Statistics</strong> An introduction to statistical methods.
                        </li>
                        <li>
                            <strong>Written communication skills</strong> How to write effective reports.
                        </li>
                        <li>
                            <strong>Data visualization</strong> Different types of visualizations and when they should
                            (or should not) be used.
                        </li>
                        <li>
                            <strong>Project</strong> Find patterns in registration data by using raw data to generate
                            visualizations.
                        </li>
                    </ul>
                </section>

                <h4 className="subsection_header">
                    Second academic year - <span className="location">2017-2018</span>
                </h4>
                <section>
                    <h5>Semester 1a: Computer systems</h5>
                    <span className="description">
                        How to program embedded systems and how to combine them with other systems.
                    </span>

                    <hr />

                    <ul className="curriculum">
                        <li>
                            <strong>Assembly and C</strong> An introduction to AVR Assembly (Atmega328p), C and how to
                            use these languages to program an Arduino Uno.
                        </li>
                        <li>
                            <strong>Computer Systems</strong> How and why computers work the way they do.
                        </li>
                        <li>
                            <strong>Python</strong> Learnin the Python programming language.
                        </li>
                        <li>
                            <strong>Communication</strong> Formal written correspondence and writing professional
                            reports. Also, oral communication in business environments.
                        </li>
                        <li>
                            <strong>Project</strong> Create a shutter system that activates when the temperature/light
                            level reaches a certain treshold (Arduino Uno and Python dashboard).
                        </li>
                    </ul>
                </section>

                <section>
                    <h5>Semester 1b: Infrastructures</h5>
                    <span className="description">
                        An brief introduction to operating systems and networking protocols.
                    </span>

                    <hr />

                    <ul className="curriculum">
                        <li>
                            <strong>Networking</strong> Integral concepts of networking, such as mobile networks,
                            protocols and routers.
                        </li>
                        <li>
                            <strong>Operating Systems</strong> How does some of the most important functionality in
                            modern operating systems work?
                        </li>
                        <li>
                            <strong>Research Strategies and Methods</strong> A closer look at some integral concepts of
                            research.
                        </li>
                        <li>
                            <strong>Intercultural Communication</strong> How to approach intercultural client meetings.
                        </li>
                        <li>
                            <strong>Project</strong> Develop an infrastructure in which weather data is parsed on a
                            Raspberry Pi and displayed in a web interface.
                        </li>
                    </ul>
                </section>

                <section>
                    <h5>Semester 2a: Software Engineering</h5>
                    <span className="description">
                        How to apply design patterns and how to write cleaner and faster code.
                    </span>

                    <hr />

                    <ul className="curriculum">
                        <li>
                            <strong>Object-Oriented Programming</strong> Design patterns and advanced Java, such as
                            lambdas, networking and concurrency.
                        </li>
                        <li>
                            <strong>Algorithms and Data Structures</strong> Effiency of algorithms (big O-notation) and
                            examples of commonly-used algorithms like Dijkstra&apos;s.
                        </li>
                        <li>
                            <strong>Communication</strong> Improving oral and written communication skills in English.
                        </li>
                        <li>
                            <strong>Project</strong> Develop a game framework and two games (reversi and tic tac toe)
                            with multiplayer functionality and artificial intelligence.
                        </li>
                    </ul>
                </section>

                <section>
                    <h5>Semester 2b: Web &amp; Mobile</h5>
                    <span className="description">
                        How to develop modern web applications using REST and frameworks like Angular and React.
                    </span>

                    <hr />

                    <ul className="curriculum">
                        <li>
                            <strong>Theoretical lessons</strong> Ecmascript, front-end frameworks (Angular and React),
                            back-end frameworks (Django and Flask) and cross-platform app development.
                        </li>
                        <li>
                            <strong>Research Strategies and Methods</strong> Research a certain topic and write a
                            report, drawing conclusions based on collected data.
                        </li>
                        <li>
                            <strong>Communication</strong> Written communication skills in Dutch.
                        </li>
                        <li>
                            <strong>Project</strong> Develop a language learning application with a Django-powered API,
                            Angular front-end and a cross-platform mobile app.
                        </li>
                    </ul>
                </section>

                <h4 className="subsection_header">
                    Third academic year - <span className="location">2018-2019</span>
                </h4>
                <section>
                    <h5>Semester 1: Minor: pre-master Computing Science (University of Groningen)</h5>
                    <span className="description">
                        The first semester of my third year consisted of a Computing Science pre-master program, which
                        is a program created for HBO students who want to pursue a master&apos;s degree at WO-level.
                    </span>

                    <hr />

                    <strong>Semester 1a:</strong>
                    <ul className="curriculum">
                        <li>
                            <strong>
                                <a
                                    href="https://www.rug.nl/ocasys/rug/vak/show?code=INBSEC-08"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Information Security
                                </a>
                            </strong>{' '}
                            How to ensure CIA in organizations using methods like encryption and hashing.
                        </li>
                        <li>
                            <strong>
                                <a
                                    href="https://www.rug.nl/ocasys/rug/vak/show?code=INBINTS-08"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Introduction to Intelligent Systems
                                </a>
                            </strong>{' '}
                            An introduction to pattern recognition, (un)supervised machine learning and image
                            processing.
                        </li>
                        <li>
                            <strong>
                                <a
                                    href="https://www.rug.nl/ocasys/rug/vak/show?code=INBGOP-09"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Advanced Object-Oriented Programming
                                </a>
                            </strong>{' '}
                            Threading, networking and design patterns in Java. Also, adding MP functionality to an{' '}
                            <a
                                href="https://en.wikipedia.org/wiki/Asteroids_%28video_game%29"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Asteroids
                            </a>{' '}
                            clone.
                        </li>
                    </ul>

                    <strong>Semester 1b:</strong>
                    <ul className="curriculum">
                        <li>
                            <strong>
                                <a
                                    href="https://www.rug.nl/ocasys/let/vak/show?code=WPMA14001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Calculus for Computing Science
                                </a>
                            </strong>{' '}
                            Pre-calculus, differentiation, integration, Taylor series and complex numbers
                        </li>
                        <li>
                            <strong>
                                <a
                                    href="https://www.rug.nl/ocasys/rug/vak/show?code=INBDS-08"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Discrete Structures
                                </a>
                            </strong>{' '}
                            Deals with discrete mathematics, like sets, graphs and mathematical induction.
                        </li>
                        <li>
                            <strong>
                                <a
                                    href="https://www.rug.nl/ocasys/rug/vak/show?code=WBCS14002"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Computer Architecture
                                </a>
                            </strong>{' '}
                            Computer Architecture covers six abstract layers in modern computers and discusses the
                            relation between those layers. The course included a lecture about operating systems and
                            computer networking.
                        </li>
                    </ul>

                    <h5>Semester 2: Internship: app development</h5>
                    <span className="description">
                        During the second semester of my third year I developed a cross-platform mobile application at
                        Advanced Climate Systems in Leens, the Netherlands.
                    </span>
                </section>

                <h4 className="subsection_header">
                    Fourth academic year - <span className="location">2019-2020</span>
                </h4>
                <section>
                    <h5>Semester 1</h5>
                    <span className="description">
                        The first semester of my fourth year consisted of courses related to Artificial Intelligence,
                        Machine Learning and various other aspects of software development.
                    </span>

                    <hr />

                    <ul className="curriculum">
                        <li>
                            <strong>Project</strong> - Virtual Fitness Coach with a mobile app and a backend based on a
                            microservice architecture.
                        </li>
                        <li>
                            <strong>Software Development Lifecycle</strong> - Course about aspects of software
                            engineering like Software Architecture, Test-Driven Development and security.
                        </li>
                        <li>
                            <strong>Artificial Intelligence & Machine Learning</strong> - An introduction to problem
                            solving using artificial intelligence. The machine learning part of the course covers neural
                            networks, both with and without libraries like Tensorflow and Keras.
                        </li>
                        <li>
                            <strong>Practical Research</strong> - Structured literature review regarding the role of
                            artificial intelligence in breast cancer diagnoses. Included a group assignment that
                            involved researching the benefit of microservices in the VFC project.
                        </li>
                        <li>
                            <strong>Enterprise Application Integration</strong> - Deals with the coupling of software
                            components that cannot directly communicate with each other.
                        </li>
                    </ul>

                    <h5>Semester 2: Graduation project: software engineer</h5>
                    <span className="description">
                        In the second semester I worked on my graduation project at the RDW in Groningen. The project
                        involved finding a way to perform automatic accessibility checks on web applications. On June
                        25th, 2020, the project was graded with an 8.5.
                    </span>
                </section>
            </div>
        );
    }
}

export default Education;
