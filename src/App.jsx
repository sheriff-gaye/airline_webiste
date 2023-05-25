import React from "react";
import Home from "./pages/home/home";
import Nav from "./pages/nav/nav";
import About from "./pages/about/about";
import Trainers from "./pages/trainers/tariner";
import NotFound from "./pages/notfound/notfound";
import "./index.css"
import Contact from "./pages/contact/contact";
import Gallery from "./pages/gallery/gallery";
import Plans from "./pages/plans/plans";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";


const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Nav />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="plans" element={<Plans />} />
                <Route path="trainers" element={<Trainers />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App