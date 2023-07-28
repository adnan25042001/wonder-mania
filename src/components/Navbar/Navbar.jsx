import React, { useEffect, useState } from "react";
import { navlinks } from "../../assets/data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import Navlink from "./Navlink";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(false);
    useEffect(() => {
        const scrollActive = () => {
            setActive(window.scrollY > 20);
        };
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 992) {
                setToggle(false);
            }
        });
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener("scroll", scrollActive);
    });
    return (
        <div
            className={`${
                active ? "shadow-lg" : ""
            } w-full px-3 top-0 left-0 z-20 bg-viridianGreen text-white sticky`}
        >
            <div className="py-4 transition-all duration-300 container m-auto flex items-center justify-between">
                <div className="text-[2rem] sm:text-[2.875rem] uppercase font-semibold">
                    wonder-mania
                </div>
                <div
                    className={`${
                        toggle
                            ? "top-[50px] md:top-[63px] py-12 gap-8"
                            : "top-[-1000px] gap-24 py-0"
                    } flex md:flex-row flex-col items-center absolute z-10 left-0 bg-viridianGreen w-full md:w-auto md:static transition-all duration-300`}
                >
                    <div className="flex flex-col md:flex-row items-center gap-8  sm:text-[1.875rem] text-[1.5rem]">
                        {navlinks &&
                            navlinks.map((link) => (
                                <Navlink key={link} link={link} />
                            ))}
                    </div>
                    <button className="btn btn-secondary sm:text-[1.5rem] text-[1.2rem]">
                        Book Now
                    </button>
                </div>
                {!toggle && (
                    <HiMenuAlt1
                        className="Static md:hidden text-white font-bold text-4xl"
                        onClick={() => setToggle(true)}
                    />
                )}
                {toggle && (
                    <HiX
                        className="static md:hidden text-white font-bold text-4xl"
                        onClick={() => setToggle(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default Header;