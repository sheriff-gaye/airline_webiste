import React from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/card";
import { testimonials } from "../data";
import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io"



const Testimonial = () => {
    const [index, setindex] = useState(0);
    const { name, avatar, quote, job } = testimonials[index]


    const TestimonialNext = () => {
        setindex(prev => prev - 1)

        if(index <= 0){
            setindex(testimonials.length -1 )

        }
    }


    const TestimonialPrev = () => {
        setindex(prev => prev + 1)
       
        if (index >= testimonials.length - 1) {
            setindex(0)
        }
    }

    return (
        <section className="testimonials">
            <div className="container testimonials_container">
                <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials_head" />
                <Card className="testimonial">
                    <div className="testimonial_avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonial_quote">{`${quote}`}</p>
                    <h5>{name}</h5>
                    <small className="testimonial_title">{job}</small>

                </Card>
                <div className="testimonail_btn-container">
                    <button className="testimonials_btn" onClick={TestimonialNext} ><IoIosArrowDropleftCircle /></button>
                    <button className="testimonials_btn" onClick={TestimonialPrev}><IoIosArrowDroprightCircle /></button>

                </div>

            </div>

        </section>
    )
}

export default Testimonial;