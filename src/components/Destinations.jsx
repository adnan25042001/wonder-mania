import React from "react";
import d1 from "../assets/images/destination-1.jpg";
import d2 from "../assets/images/destination-2.jpg";
import d3 from "../assets/images/destination-3.jpg";
import d4 from "../assets/images/destination-4.jpg";
import d5 from "../assets/images/destination-5.jpg";

const Destinations = () => {
    return (
        <div className="container px-4 py-20 m-auto" id="destinations">
            <p className="text-7xl font-f text-mikadoYellow text-center">
                Destinations
            </p>

            <h2 className="text-6xl font-bold text-jet text-center my-16">
                Choose Your Place
            </h2>

            <div className="flex flex-col gap-12 mt-24">
                <div className="flex sm:flex-row flex-col gap-12">
                    <a href="#" className="image-transition">
                        <img src={d1} alt="" className="" />
                        <div className="absolute h-full w-full text-2xl z-10 top-0 left-0 gradiant">
                            <p class="text-5xl font-f text-mikadoYellow absolute left-12 bottom-32 sm:bottom-20 md:bottom-32">
                                Malé
                            </p>

                            <h3 class="absolute bottom-14 left-12 font-bold text-white text-5xl sm:bottom-6 md:bottom-14">
                                Maldives
                            </h3>
                        </div>
                    </a>
                    <a href="#" className="image-transition">
                        <img src={d2} alt="" />
                        <div className="absolute h-full w-full text-2xl z-10 top-0 left-0 gradiant">
                            <p class="text-5xl font-f text-mikadoYellow absolute left-12 bottom-32 sm:bottom-20 md:bottom-32">
                                Bangkok
                            </p>

                            <h3 class="absolute bottom-14 left-12 font-bold text-white text-5xl sm:bottom-6 md:bottom-14">
                                Thailand
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="flex sm:flex-row flex-col gap-12">
                    <a href="#" className="image-transition">
                        <img src={d3} alt="" className="" />
                        <div className="absolute h-full w-full text-2xl z-10 top-0 left-0 gradiant">
                            <p class="text-5xl font-f text-mikadoYellow absolute left-12 bottom-32 sm:bottom-20 md:bottom-32">
                                Kuala Lumpur
                            </p>

                            <h3 class="absolute bottom-14 left-12 font-bold text-white text-5xl sm:bottom-6 md:bottom-14">
                                Malaysia
                            </h3>
                        </div>
                    </a>
                    <a href="#" className="image-transition">
                        <img src={d4} alt="" />
                        <div className="absolute h-full w-full text-2xl z-10 top-0 left-0 gradiant">
                            {" "}
                            <p class="text-5xl font-f text-mikadoYellow absolute left-12 bottom-32 sm:bottom-20 md:bottom-32">
                                Kathmandu
                            </p>
                            <h3 class="absolute bottom-14 left-12 font-bold text-white text-5xl sm:bottom-6 md:bottom-14">
                                Nepal
                            </h3>
                        </div>
                    </a>
                    <a href="#" className="image-transition">
                        <img src={d5} alt="" />
                        <div className="absolute h-full w-full text-2xl z-10 top-0 left-0 gradiant">
                            <p class="text-5xl font-f text-mikadoYellow absolute left-12 bottom-32 sm:bottom-20 md:bottom-32">
                                Jakarta
                            </p>

                            <h3 class="absolute bottom-14 left-12 font-bold text-white text-5xl sm:bottom-6 md:bottom-14">
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
