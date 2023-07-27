import React from "react";
import v1 from "../assets/images/shape-1.png";
import v2 from "../assets/images/shape-2.png";
import v3 from "../assets/images/shape-3.png";

const Home = () => {
    return (
        <div className="container px-4 py-10 m-auto w-full relative">
            <img
                src={v1}
                width="61"
                height="61"
                alt="Vector Shape"
                className="animate-spin hidden md:block absolute md:top-[60px] md:left-[47%]"
            />

            <img
                src={v2}
                width="56"
                height="74"
                alt="Vector Shape"
                className="animate-spin hidden md:block absolute md:top-[20%] md:right-[50px]"
            />

            <img
                src={v3}
                width="57"
                height="72"
                alt="Vector Shape"
                className="animate-spin hidden md:block absolute md:left-[40%] md:bottom-[20%]"
            />
            <div className="flex flex-col md:flex-row">
                <div class="hero-content">
                    <p class="section-subtitle">Explore Your Travel</p>

                    <h2 class="hero-title">Trusted Travel Agency</h2>

                    <p class="hero-text">
                        I travel not to go anywhere, but to go. I travel for
                        travel's sake the great affair is to move.
                    </p>

                    <div class="btn-group">
                        <a href="#" class="btn btn-primary">
                            Contact Us
                        </a>

                        <a href="#" class="btn btn-outline">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
