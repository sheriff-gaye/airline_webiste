import React from "react";
import Home from "./pages/home/home";
import Nav from "./pages/nav/nav";
import NotFound from "./pages/notfound/notfound";
import "./index.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";


const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Nav />
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App