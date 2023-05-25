import React from "react";
import "./about.css"
import Header from "../../components/Header";
import Image from "../../images/header_bg_1.jpg";
import About_img from "../../images/about1.jpg";
import About_img2 from "../../images/about2.jpg";
import About_img3 from "../../images/about3.jpg";

const About = () => {
    return (
        <>
            <Header image={Image} title="About Us"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laboriosam
                est alias quidem blanditiis aliquid molestiae cum, officia ipsum soluta?
            </Header>

            <section className="about_story">
                <div className="container about_story-container">
                    <div className="about_section-image">
                        <img src={About_img} alt="about_image" />

                    </div>

                    <div className="about_section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum a
                            speriores itaque laudantium iste iure modi? Dolor recusandae dolore,
                            eligendi fuga molestiae maiores amet sint repudiandae magnam nemo dignissimos itaque!
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum a
                            speriores itaque laudantium iste iure modi? Dolor recusandae dolore,
                            eligendi fuga molestiae maiores amet sint repudiandae magnam nemo dignissimos itaque!
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum a itaque!</p>

                    </div>

                </div>

            </section>


            <section className="about_story">
                <div className="container about_vision-container">

                    <div className="about_section-content">
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum a
                            speriores itaque laudantium iste iure modi? Dolor recusandae dolore,
                            eligendi fuga molestiae maiores amet sint repudiandae magnam nemo dignissimos itaque!
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum a
                            speriores itaque laudantium iste iure modi? Dolor recusandae dolore,
                            eligendi fuga molestiae maiores amet sint repudiandae magnam nemo dignissimos itaque!
                        </p>

                    </div>

                    <div className="about_section-image">
                        <img src={About_img2} alt="about_image" />

                    </div>

                </div>

            </section>


            <section className="about_story">
                <div className="container about_mission-container">
                    <div className="about_section-image">
                        <img src={About_img3} alt="about_image" />

                    </div>

                    <div className="about_section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum a
                            speriores itaque laudantium iste iure modi? Dolor recusandae dolore,
                            eligendi fuga molestiae maiores amet sint repudiandae magnam nemo dignissimos itaque!
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum a
                            speriores itaque laudantium iste iure modi? Dolor recusandae dolore,
                            eligendi fuga molestiae maiores amet sint repudiandae magnam nemo dignissimos itaque!
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum a itaque!</p>

                    </div>

                </div>

            </section>
        </>
    )
}

export default About