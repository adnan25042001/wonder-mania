import React from "react";
import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsLinkedin,
    BsGoogle,
} from "react-icons/bs";

const Footer = () => {
    return (
        <div
            className="text-white footer-bg bg-oxfordBlue bg-no-repeat bg-center bg-cover"
            id="contact us"
        >
            <div className="container px-4 py-20 m-auto">
                <div className="flex flex-wrap gap-8 mb-12">
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">
                            Top destination
                        </p>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Indonesia, Jakarta
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Maldives, Malé
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Australia, Canberra
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Thailand, Bangkok
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Morocco, Rabat
                        </a>
                    </div>
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">Categories</p>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Travel
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Lifestyle
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Fashion
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Education
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Food & Drink
                        </a>
                    </div>
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">Quick links</p>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Contact
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Tours
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Booking
                        </a>
                        <a
                            href="#"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Terms & Conditions
                        </a>
                    </div>
                    <div className="w-[400px]">
                        <p className="text-2xl font-bold mb-6">
                            Get a newsletter
                        </p>
                        <p className="text-base text-lightGray hover:text-white mb-3">
                            For the latest deals and tips, travel no further
                            than your inbox
                        </p>
                        <form className="relative mt-6">
                            <input
                                type="text"
                                placeholder="Email address"
                                className="border-none outline-none text-eerieBlack py-3 pl-6 pr-36 text-lg rounded-lg"
                            />
                            <button className="absolute right-0 top-0 bg-viridianGreen py-3 text-lg px-5 rounded-r-lg">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 justify-between items-center">
                    <div className="text-xl sm:text-2xl uppercase font-semibold">
                        wonder-mania
                    </div>

                    <p className="flex justify-center items-center text-sm text-lightGray">
                        &copy; 2022 Adnan Hussain All Rights Reserved
                    </p>
                    <div className="flex gap-2 text-lightGray">
                        <a
                            href="#"
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsFacebook />
                        </a>
                        <a
                            href="#"
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsTwitter />
                        </a>
                        <a
                            href="#"
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="#"
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsLinkedin />
                        </a>
                        <a
                            href="#"
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsGoogle />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
