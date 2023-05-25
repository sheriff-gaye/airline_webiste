import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import Image from "../../images/header_bg_2.jpg";
import {MdEmail} from "react-icons/md";
import {BsMessenger}from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";

const Contact=()=>{
    return (
      <>
    <Header title="Get in Touch" image={Image}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laboriosam
                est alias quidem blanditiis aliquid molestiae cum, officia ipsum soluta?
    </Header>

    <section className="contact">
        <div className="container contact_container">
            <div className="contact_wrapper">
                <a href="" target="_blank"><MdEmail/></a>
                <a href="" target="_blank"><IoLogoWhatsapp/></a>
                <a href="" target="_blank"><BsMessenger/></a>
                
            </div>
            
        </div>
        
    </section>
      </>
    )
}

export default Contact;