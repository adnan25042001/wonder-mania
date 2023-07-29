import React from "react";
import aboutImage from "../assets/images/about-banner.png";
import { FaCompass, FaBriefcase, FaUmbrella } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="container px-4 py-20 m-auto" id="about us">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="w-[100%] md:w-[42%] shrink-0">
                    <p class="text-5xl font-f text-mikadoYellow">About Us</p>

                    <h2 class="text-5xl font-bold text-jet my-8">
                        Explore all tour of the world with us.
                    </h2>

                    <p class="text-lg text-battleshipGray mb-10">
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or
                        randomised words which don't look even slightly
                        believable.
                    </p>

                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4">
                            <div className="h-14 w-14 rounded-full bg-viridianGreen flex text-white justify-center items-center text-2xl shrink-0 border-[2px] border-viridianGreen hover:bg-white hover:text-viridianGreen">
                                <FaCompass />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-graniteGray mb-2">
                                    Tour Guide
                                </h3>
                                <p className="text-lg text-battleshipGray">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Ducimus, aperiam.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="h-14 w-14 rounded-full bg-viridianGreen flex text-white justify-center items-center text-2xl shrink-0 border-[2px] border-viridianGreen hover:bg-white hover:text-viridianGreen">
                                <FaBriefcase />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-graniteGray mb-2">
                                    Friendly Price
                                </h3>
                                <p className="text-lg text-battleshipGray">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Ducimus, aperiam.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="h-14 w-14 rounded-full bg-viridianGreen flex text-white justify-center items-center text-2xl shrink-0 border-[2px] border-viridianGreen hover:bg-white hover:text-viridianGreen">
                                <FaUmbrella />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-graniteGray mb-2">
                                    Tour Guide
                                </h3>
                                <p className="text-lg text-battleshipGray">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Ducimus, aperiam.
                                </p>
                            </div>
                        </div>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10 md:mt-0">
                    <img src={aboutImage} alt="" className="w-[100%]" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
