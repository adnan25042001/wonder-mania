import React from "react";
import { Link } from "react-scroll";

const Navlink = ({ link }) => {
    return (
        <li className="font-medium cursor-pointer hover:text-lightGray">
            <Link
                to={link.toLocaleLowerCase()}
                spy={true}
                smooth={true}
                duration={100}
                offset={-50}
            >
                {link}
            </Link>
        </li>
    );
};

export default Navlink;
