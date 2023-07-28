import React from "react";
import p1 from "../assets/images/popular-1.jpg";
import p2 from "../assets/images/popular-2.jpg";
import p3 from "../assets/images/popular-3.jpg";
import { BsClock, BsStar, BsStarFill } from "react-icons/bs";

const Popular = () => {
    return (
        <div className="container px-4 py-20 m-auto">
            <p className="text-5xl font-f text-mikadoYellow text-center">
                Featured Tours
            </p>

            <h2 className="text-5xl font-bold text-jet text-center my-8">
                Most Popular Tours
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
                <div className="rounded-md shadow-xl">
                    <div className="relative">
                        <a href="#">
                            <img src={p1} alt="" />
                        </a>
                        <span className="absolute top-3 left-3 flex items-center justify-center bg-mikadoYellow z-10 flex-col h-[70px] w-[70px] rounded-md gap-1 ">
                            <BsClock className="text-white font-bold text-base" />
                            <div className="text-base font-medium text-white">
                                12 Days
                            </div>
                        </span>
                    </div>
                    <div className="m-8">
                        <div className="flex gap-5 mb-6">
                            <div className="px-2 py-[6px] rounded-md bg-viridianGreen text-sm text-white items-center">
                                From &#8377;7999
                            </div>
                            <div className="flex gap-1 px-2 py-[6px] rounded-md bg-mikadoYellow text-sm text-white items-center">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStar />
                                <p>(67)</p>
                            </div>
                        </div>
                        <h3 className="text-[18px] text-graniteGray hover:text-viridianGreen font-bold mb-6">
                            <a href="#">
                                A good traveler has no fixed plans and is not
                                intent on arriving.
                            </a>
                        </h3>
                        <p className="text-base text-battleshipGray">
                            Kuala Lumpur, Malaysia
                        </p>
                    </div>
                </div>
                <div className="rounded-md shadow-xl">
                    <div className="relative">
                        <a href="#">
                            <img src={p2} alt="" />
                        </a>
                        <span className="absolute top-3 left-3 flex items-center justify-center bg-mikadoYellow z-10 flex-col h-[70px] w-[70px] rounded-md gap-1 ">
                            <BsClock className="text-white font-bold text-base" />
                            <div className="text-base font-medium text-white">
                                12 Days
                            </div>
                        </span>
                    </div>
                    <div className="m-8">
                        <div className="flex gap-5 mb-6">
                            <div className="px-2 py-[6px] rounded-md bg-viridianGreen text-sm text-white items-center">
                                From &#8377;7999
                            </div>
                            <div className="flex gap-1 px-2 py-[6px] rounded-md bg-mikadoYellow text-sm text-white items-center">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStar />
                                <p>(67)</p>
                            </div>
                        </div>
                        <h3 className="text-[18px] text-graniteGray hover:text-viridianGreen font-bold mb-6">
                            <a href="#">
                                A good traveler has no fixed plans and is not
                                intent on arriving.
                            </a>
                        </h3>
                        <p className="text-base text-battleshipGray">
                            Kuala Lumpur, Malaysia
                        </p>
                    </div>
                </div>
                <div className="rounded-md shadow-xl">
                    <div className="relative">
                        <a href="#">
                            <img src={p3} alt="" />
                        </a>
                        <span className="absolute top-3 left-3 flex items-center justify-center bg-mikadoYellow z-10 flex-col h-[70px] w-[70px] rounded-md gap-1 ">
                            <BsClock className="text-white font-bold text-base" />
                            <div className="text-base font-medium text-white">
                                12 Days
                            </div>
                        </span>
                    </div>
                    <div className="m-8">
                        <div className="flex gap-5 mb-6">
                            <div className="px-2 py-[6px] rounded-md bg-viridianGreen text-sm text-white items-center">
                                From &#8377;7999
                            </div>
                            <div className="flex gap-1 px-2 py-[6px] rounded-md bg-mikadoYellow text-sm text-white items-center">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStar />
                                <p>(67)</p>
                            </div>
                        </div>
                        <h3 className="text-[18px] text-graniteGray hover:text-viridianGreen font-bold mb-6">
                            <a href="#">
                                A good traveler has no fixed plans and is not
                                intent on arriving.
                            </a>
                        </h3>
                        <p className="text-base text-battleshipGray">
                            Kuala Lumpur, Malaysia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;
