import React from "react";
import "./home.css"
import Header from "../../components/Mainheader";
import Mainheader from "../../components/Mainheader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import Faqs from "../../components/Faqs";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer";


const Home = () => {
    return (

        <>
            <Mainheader />
            <Programs />
            <Values/>
            <Faqs/>
            <Testimonial/>


        </>



    )
}

export default Home;