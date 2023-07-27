import React, { useState } from "react";
import { Link } from "react-scroll";

const Navlink = ({ link }) => {
    return (
        <li className="font-medium cursor-pointer hover:text-lightGray">
            <Link to={`#${link.toLowerCase()}`}>{link}</Link>
        </li>
    );
};

export default Navlink;
