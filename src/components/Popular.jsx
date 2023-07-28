import React from "react";
import p1 from "../assets/images/popular-1.jpg";
import p2 from "../assets/images/popular-2.jpg";
import p3 from "../assets/images/popular-3.jpg";
import { BsClock, BsStar, BsStarFill } from "react-icons/bs";

const Popular = () => {
    return (
        <div className="container px-4 py-28 m-auto">
            <p className="text-7xl font-f text-mikadoYellow text-center">
                Featured Tours
            </p>

            <h2 className="text-6xl font-bold text-jet text-center my-16">
                Most Popular Tours
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                <div className="rounded-xl shadow-2xl">
                    <div className="relative">
                        <a href="#">
                            <img src={p1} alt="" />
                        </a>
                        <span className="absolute top-5 left-5 flex items-center justify-center bg-mikadoYellow z-10 flex-col h-28 w-28 rounded-xl gap-2 ">
                            <BsClock className="text-white font-bold text-3xl" />
                            <div className="text-[1.5rem] font-medium text-white">
                                12 Days
                            </div>
                        </span>
                    </div>
                    <div className="px-6 my-12">
                        <div className="flex gap-8 mb-10">
                            <div className="px-3 py-2 rounded-lg bg-viridianGreen text-2xl text-white items-center">
                                From &#8377;7999
                            </div>
                            <div className="flex gap-2 px-3 py-2 rounded-lg bg-mikadoYellow text-2xl text-white items-center">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStar />
                                <p>(67)</p>
                            </div>
                        </div>
                        <h3 className="text-3xl text-graniteGray hover:text-viridianGreen font-bold mb-12">
                            <a href="#">
                                A good traveler has no fixed plans and is not
                                intent on arriving.
                            </a>
                        </h3>
                        <p className="text-2xl text-battleshipGray">
                            Kuala Lumpur, Malaysia
                        </p>
                    </div>
                </div>
                <div className="rounded-xl shadow-2xl">
                    <div className="relative">
                        <a href="#">
                            <img src={p2} alt="" />
                        </a>
                        <span className="absolute top-5 left-5 flex items-center justify-center bg-mikadoYellow z-10 flex-col h-28 w-28 rounded-xl gap-2 ">
                            <BsClock className="text-white font-bold text-3xl" />
                            <div className="text-[1.5rem] font-medium text-white">
                                12 Days
                            </div>
                        </span>
                    </div>
                    <div className="px-6 my-12">
                        <div className="flex gap-8 mb-10">
                            <div className="px-3 py-2 rounded-lg bg-viridianGreen text-2xl text-white items-center">
                                From &#8377;7999
                            </div>
                            <div className="flex gap-2 px-3 py-2 rounded-lg bg-mikadoYellow text-2xl text-white items-center">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStar />
                                <p>(67)</p>
                            </div>
                        </div>
                        <h3 className="text-3xl text-graniteGray hover:text-viridianGreen font-bold mb-12">
                            <a href="#">
                                A good traveler has no fixed plans and is not
                                intent on arriving.
                            </a>
                        </h3>
                        <p className="text-2xl text-battleshipGray">
                            Kuala Lumpur, Malaysia
                        </p>
                    </div>
                </div>
                <div className="rounded-xl shadow-2xl">
                    <div className="relative">
                        <a href="#">
                            <img src={p3} alt="" />
                        </a>
                        <span className="absolute top-5 left-5 flex items-center justify-center bg-mikadoYellow z-10 flex-col h-28 w-28 rounded-xl gap-2 ">
                            <BsClock className="text-white font-bold text-3xl" />
                            <div className="text-[1.5rem] font-medium text-white">
                                12 Days
                            </div>
                        </span>
                    </div>
                    <div className="px-6 my-12">
                        <div className="flex gap-8 mb-10">
                            <div className="px-3 py-2 rounded-lg bg-viridianGreen text-2xl text-white items-center">
                                From &#8377;7999
                            </div>
                            <div className="flex gap-2 px-3 py-2 rounded-lg bg-mikadoYellow text-2xl text-white items-center">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStar />
                                <p>(67)</p>
                            </div>
                        </div>
                        <h3 className="text-3xl text-graniteGray hover:text-viridianGreen font-bold mb-12">
                            <a href="#">
                                A good traveler has no fixed plans and is not
                                intent on arriving.
                            </a>
                        </h3>
                        <p className="text-2xl text-battleshipGray">
                            Kuala Lumpur, Malaysia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;
