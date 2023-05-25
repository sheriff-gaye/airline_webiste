import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import Image from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Header title="Get in Touch" image={Image}>
        Have questions, need assistance, or want to join our fitness community?
        Get in touch with us today through our Contact Us page and start your
        journey towards a healthier lifestyle!"
      </Header>

      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:sheriffgaye5@gmail.com" target="_blank" rel="noreferrer">
              <MdEmail />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <IoLogoWhatsapp />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <BsMessenger />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
