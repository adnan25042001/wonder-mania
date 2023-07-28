import React from "react";
import v1 from "../assets/images/shape-1.png";
import v2 from "../assets/images/shape-2.png";
import v3 from "../assets/images/shape-3.png";
import hero from "../assets/images/hero-banner.png";

const Home = () => {
    return (
        <div className="container px-4 py-20 m-auto relative" id="home">
            <img
                src={v1}
                width="61"
                height="61"
                alt="Vector Shape"
                className="animate hidden md:block absolute md:top-[60px] md:left-[47%]"
            />

            <img
                src={v2}
                width="56"
                height="74"
                alt="Vector Shape"
                className="animate hidden md:block absolute md:top-[20%] md:right-[50px]"
            />

            <img
                src={v3}
                width="57"
                height="72"
                alt="Vector Shape"
                className="animate hidden md:block absolute md:left-[40%] md:bottom-[20%]"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="w-full px-8 flex flex-col mt-10 sm:mt-40 gap-16">
                    <p className="text-7xl font-f text-mikadoYellow">
                        Explore Your Travel
                    </p>

                    <h2 className="text-7xl sm:text-8xl font-bold text-oxfordBlue">Trusted Travel Agency</h2>

                    <p className="text-3xl text-blackCoral">
                        I travel not to go anywhere, but to go. I travel for
                        travel's sake the great affair is to move.
                    </p>

                    <div className="flex gap-5 text-2xl">
                        <a href="#" className="btn btn-primary">
                            Contact Us
                        </a>

                        <a href="#" className="btn btn-outline">
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-20 sm:mt-10">
                    <img
                        src={hero}
                        alt=""
                        className="sm:w-full w-[70%]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
