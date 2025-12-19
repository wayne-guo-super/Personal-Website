'use client'
// components/Footer.jsx
import { Fragment, useState, useEffect } from "react";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);

    return (
        <Fragment>
            <div className="w-full bg-[#0f524f] text-center text-gray-300 font-mono">
                <p>{`© ${year}. Designed and Developed by Wayne Guo.`}</p>
            </div>
        </Fragment>
    );
};

export default Footer;