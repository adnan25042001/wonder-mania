import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Destinations from "./components/Destinations";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Destinations/>
        </div>
    );
};

export default App;
