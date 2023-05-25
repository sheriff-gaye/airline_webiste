import React from "react";
import "./about.css";
import Header from "../../components/Header";
import Image from "../../images/header_bg_1.jpg";
import About_img from "../../images/about1.jpg";
import About_img2 from "../../images/about2.jpg";
import About_img3 from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header image={Image} title="About Us">
        {" "}
        Transform Your Fitness Journey. Our Gym is dedicated to helping you
        achieve your goals through personalized training and state-of-the-art
        facilities.
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={About_img} alt="about_image" />
          </div>

          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              At Gym, our story is one of determination and transformation. We
              believe that fitness is not just a hobby, but a lifestyle. With
              state-of-the-art equipment and expert trainers, we provide a
              supportive environment for individuals of all fitness levels.
            </p>

            <p>
              Our diverse range of classes and personalized workout programs
              cater to specific goals, whether it's building strength, losing
              weight, or improving overall well-being. We are dedicated to
              helping our members achieve their fitness aspirations and
              empowering them to lead healthier, happier lives. Join us and
              become a part of our inspiring fitness community.
            </p>
          </div>
        </div>
      </section>

      <section className="about_story">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              At Gym Our Vision, our goal is to empower individuals to achieve
              their fitness aspirations and transform their lives. We believe in
              creating an inclusive and supportive environment where everyone,
              regardless of age, fitness level, or background, can thrive. Our
              dedicated team of experienced trainers is committed to providing
              personalized guidance, motivating individuals to push their
              limits, and celebrating their achievements.
            </p>

            <p>
              We prioritize a comprehensive approach to fitness, offering
              state-of-the-art equipment, diverse workout programs, and
              nutritional support. With a focus on building strength, endurance,
              and overall well-being, we strive to inspire individuals to adopt
              a lifelong commitment to their health and fitness journey at Gym
              Our Vision.
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
            <p>
              At Gym, our mission is to inspire and empower individuals to
              achieve their fitness goals and lead healthier lives. We believe
              in creating a supportive and inclusive environment where everyone
              feels welcomed and motivated to push their limits. Our
              state-of-the-art facilities are equipped with top-notch equipment
              and dedicated trainers who are passionate about helping you
              succeed.
            </p>

            <p>
              Whether you're a beginner or a seasoned athlete, we offer a
              variety of classes and personalized training programs tailored to
              your specific needs. We strive to make fitness fun and accessible
              for all, fostering a community that celebrates progress and
              celebrates the power of a strong body and mind. Join us on this
              transformative journey towards a better you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
