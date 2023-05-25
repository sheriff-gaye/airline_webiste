import React from "react";
import Header from "../../components/Header";
import Image from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import Trainer from "../../components/Trianer";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={Image}>
        Our experienced gym trainers are dedicated to helping you reach your
        fitness goals through personalized training programs, expert guidance,
        and unwavering support. Get ready to transform your body and exceed your
        limits.
      </Header>

      <section className="trainers">
        <div className="container trainer_container">
          {trainers.map(({ id, name, image, job, socials }) => {
            return (
              <Trainer
                key={id}
                name={name}
                image={image}
                job={job}
                socials={[
                  { icon: <AiFillInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebook />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] }
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
