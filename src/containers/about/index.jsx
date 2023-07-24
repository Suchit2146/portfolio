import React from "react";
import "./styles.scss";
import { BsInfoCircleFill } from 'react-icons/bs'
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate"

const personalDetails = [
    {
        label: "Name",
        value: "Suchit Kumar"
    },
    {
        label: "Age",
        value: "27"
    },
    {
        label: "Address",
        value: "Faridabad"
    },
    {
        label: "Email",
        value: "SuchitKumar2121@gmail.com"
    },
    {
        label: "Contact No.",
        value: "9467547572"
    }
]

const jobSummary = "Innovative Full Stack Developer having learning mind set. Proficient in React, NodeJS, JavaScript,  MySql and keen to learn new and updated technologies. I am a dedicated person so that I can get the success I deserve and my dedication will ultimately act as a catalyst to achieve company’s Vision, Mission, and Goal.."

const About = () => {
    return (
        <section id='about' className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)',
                        }}

                        end={{
                            transform: 'translateX(0px)',
                        }}
                    >
                        <h3>Frontend developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-500px)',
                        }}

                        end={{
                            transform: 'translateX(0px)',
                        }}
                    >

                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>

                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)',
                        }}

                        end={{
                            transform: 'translateX(0px)',
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContant">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>

                </div>

            </div>
        </section>
    )
}
export default About;