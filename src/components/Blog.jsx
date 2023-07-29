import React from "react";
import b1 from "../assets/images/popular-1.jpg";
import b2 from "../assets/images/blog-2.jpg";
import b3 from "../assets/images/blog-3.jpg";
import author from "../assets/images/author-avatar.png";
import { BsClock, BsArrowRightShort } from "react-icons/bs";

const Popular = () => {
    return (
        <div className="container px-4 py-20 m-auto" id="blog">
            <p className="text-5xl font-f text-mikadoYellow text-center">
                From The Blog Post
            </p>

            <h2 className="text-5xl font-bold text-jet text-center my-8">
                Latest News & Articles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
                <div className="rounded-md shadow-xl">
                    <div className="relative">
                        <a href="#">
                            <img src={b1} alt="" />
                        </a>
                        <span className="absolute top-3 left-3 flex items-center justify-center bg-mikadoYellow z-10 flex-col h-[70px] w-[70px] rounded-md gap-1 ">
                            <BsClock className="text-white font-bold text-base" />
                            <div className="text-base font-medium text-white">
                                04 Dec
                            </div>
                        </span>
                    </div>
                    <div className="m-8">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex gap-4 items-center justify-center">
                                <img src={author} alt="" className="w-8 shrink-0"/>
                                <div>
                                    <a href="#" className="text-base text-graniteGray font-medium">Jony bristow</a>
                                    <p className="text-sm text-silverChalice">Admin</p>
                                </div>
                            </div>
                            <div className="text-sm text-silverChalice">10:30 AM</div>
                        </div>
                        <h3 className="text-[18px] text-graniteGray hover:text-viridianGreen font-bold mb-6">
                            <a href="#">
                                A good traveler has no fixed plans and is not
                                intent on arriving.
                            </a>
                        </h3>
                        <p className="text-base hover:text-jet text-viridianGreen font-bold mb-6 cursor-pointer flex gap-1 justify-end items-center">
                            Read More <BsArrowRightShort className="text-3xl" />
                        </p>
                    </div>
                </div>
                <div className="rounded-md shadow-xl">
                    <div className="relative">
                        <a href="#">
                            <img src={b2} alt="" />
                        </a>
                        <span className="absolute top-3 left-3 flex items-center justify-center bg-mikadoYellow z-10 flex-col h-[70px] w-[70px] rounded-md gap-1 ">
                            <BsClock className="text-white font-bold text-base" />
                            <div className="text-base font-medium text-white">
                                04 Dec
                            </div>
                        </span>
                    </div>
                    <div className="m-8">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex gap-4 items-center justify-center">
                                <img src={author} alt="" className="w-8 shrink-0"/>
                                <div>
                                    <a href="#" className="text-base text-graniteGray font-medium">Jony bristow</a>
                                    <p className="text-sm text-silverChalice">Admin</p>
                                </div>
                            </div>
                            <div className="text-sm text-silverChalice">10:30 AM</div>
                        </div>
                        <h3 className="text-[18px] text-graniteGray hover:text-viridianGreen font-bold mb-6">
                            <a href="#">
                                A good traveler has no fixed plans and is not
                                intent on arriving.
                            </a>
                        </h3>
                        <p className="text-base hover:text-jet text-viridianGreen font-bold mb-6 cursor-pointer flex gap-1 justify-end items-center">
                            Read More <BsArrowRightShort className="text-3xl" />
                        </p>
                    </div>
                </div>
                <div className="rounded-md shadow-xl">
                    <div className="relative">
                        <a href="#">
                            <img src={b3} alt="" />
                        </a>
                        <span className="absolute top-3 left-3 flex items-center justify-center bg-mikadoYellow z-10 flex-col h-[70px] w-[70px] rounded-md gap-1 ">
                            <BsClock className="text-white font-bold text-base" />
                            <div className="text-base font-medium text-white">
                                04 Dec
                            </div>
                        </span>
                    </div>
                    <div className="m-8">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex gap-4 items-center justify-center">
                                <img src={author} alt="" className="w-8 shrink-0"/>
                                <div>
                                    <a href="#" className="text-base text-graniteGray font-medium">Jony bristow</a>
                                    <p className="text-sm text-silverChalice">Admin</p>
                                </div>
                            </div>
                            <div className="text-sm text-silverChalice">10:30 AM</div>
                        </div>
                        <h3 className="text-[18px] text-graniteGray hover:text-viridianGreen font-bold mb-6">
                            <a href="#">
                                A good traveler has no fixed plans and is not
                                intent on arriving.
                            </a>
                        </h3>
                        <p className="text-base hover:text-jet text-viridianGreen font-bold mb-6 cursor-pointer flex gap-1 justify-end items-center">
                            Read More <BsArrowRightShort className="text-3xl" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;
