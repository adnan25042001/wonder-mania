import React from "react";
import d1 from "../assets/images/destination-1.jpg";
import d2 from "../assets/images/destination-2.jpg";
import d3 from "../assets/images/destination-3.jpg";
import d4 from "../assets/images/destination-4.jpg";
import d5 from "../assets/images/destination-5.jpg";

const Destinations = () => {
    return (
        <div className="container px-4 py-20 m-auto" id="destinations">
            <p className="text-5xl font-f text-mikadoYellow text-center">
                Destinations
            </p>

            <h2 className="text-5xl font-bold text-jet text-center my-8">
                Choose Your Place
            </h2>

            <div className="flex flex-col gap-8 mt-16">
                <div className="flex sm:flex-row flex-col gap-8">
                    <a href="#" className="image-transition">
                        <img src={d1} alt="" className="" />
                        <div className="absolute h-full w-full z-10 top-0 left-0 gradiant">
                            <p className="text-3xl font-f text-mikadoYellow absolute left-6 bottom-bottom-[70px] sm:bottom-14 md:bottom-[70px]">
                                Malé
                            </p>

                            <h3 className="absolute bottom-7 left-6 font-bold text-white text-3xl sm:bottom-4 md:bottom-7">
                                Maldives
                            </h3>
                        </div>
                    </a>
                    <a href="#" className="image-transition">
                        <img src={d2} alt="" />
                        <div className="absolute h-full w-full text-2xl z-10 top-0 left-0 gradiant">
                            <p className="text-3xl font-f text-mikadoYellow absolute left-6 bottom-bottom-[70px] sm:bottom-14 md:bottom-[70px]">
                                Bangkok
                            </p>

                            <h3 className="absolute bottom-7 left-6 font-bold text-white text-3xl sm:bottom-4 md:bottom-7">
                                Thailand
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="flex sm:flex-row flex-col gap-12">
                    <a href="#" className="image-transition">
                        <img src={d3} alt="" className="" />
                        <div className="absolute h-full w-full text-2xl z-10 top-0 left-0 gradiant">
                            <p className="text-3xl font-f text-mikadoYellow absolute left-6 bottom-bottom-[70px] sm:bottom-14 md:bottom-[70px]">
                                Kuala Lumpur
                            </p>

                            <h3 className="absolute bottom-7 left-6 font-bold text-white text-3xl sm:bottom-4 md:bottom-7">
                                Malaysia
                            </h3>
                        </div>
                    </a>
                    <a href="#" className="image-transition">
                        <img src={d4} alt="" />
                        <div className="absolute h-full w-full text-2xl z-10 top-0 left-0 gradiant">
                            <p className="text-3xl font-f text-mikadoYellow absolute left-6 bottom-bottom-[70px] sm:bottom-14 md:bottom-[70px]">
                                Kathmandu
                            </p>
                            <h3 className="absolute bottom-7 left-6 font-bold text-white text-3xl sm:bottom-4 md:bottom-7">
                                Nepal
                            </h3>
                        </div>
                    </a>
                    <a href="#" className="image-transition">
                        <img src={d5} alt="" />
                        <div className="absolute h-full w-full z-10 top-0 left-0 gradiant">
                            <p className="text-3xl md:text-3xl font-f text-mikadoYellow absolute left-6 bottom-bottom-[70px] sm:bottom-14 md:bottom-[70px]">
                                Jakarta
                            </p>

                            <h3 className="absolute bottom-7 left-6 font-bold text-white text-2xl md:text-3xl sm:bottom-4 md:bottom-7">
                                Indonesia
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
