import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Popular from "./components/Popular";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Destinations />
            <Popular />
        </div>
    );
};

export default App;
