import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Tours from "./components/Tours";
import AboutUs from "./components/About";
import Blog from "./components/Blog";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Destinations />
            <Tours />
            <AboutUs />
            <Blog />
        </div>
    );
};

export default App;
