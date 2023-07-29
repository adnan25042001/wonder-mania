import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Tours from "./components/Tours";
import AboutUs from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Destinations />
            <Tours />
            <AboutUs />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
