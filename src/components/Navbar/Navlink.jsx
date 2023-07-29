import React from "react";
import { Link } from "react-scroll";

const Navlink = ({ link, setToggle }) => {
    return (
        <li className="font-medium cursor-pointer hover:text-lightGray">
            <Link
                to={link.toLocaleLowerCase()}
                spy={true}
                smooth={true}
                duration={100}
                offset={-50}
                onClick={() => setToggle(false)}
            >
                {link}
            </Link>
        </li>
    );
};

export default Navlink;
