import React from "react";
import "./styles.scss";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";

const Contact = () => {
    return (
        <section id='contact' className="contact">
            <PageHeaderContent
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <h3 className="contact__content__header-text"> Lets Talk</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <div className="contact__content__form">
                        <div className="contact__content__form__controlsWrapper">
                            <div>
                                <input required type="text" name="name" className="inputName" />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input required type="email" name="email" className="inputEmail" />
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div>
                                <textarea required type="text" name="description" className="inputDescription" rows={5} />
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                            </div>
                        </div>
                        <button>Submit</button>

                        <br />
                        <br />
                        <br />
                        <h1 style={{ color: "white" }}>Contact Me At <span style={{ color: "green" }}>9467547572</span></h1>
                    </div>
                </Animate>
            </div>
        </section>
    )
}
export default Contact;