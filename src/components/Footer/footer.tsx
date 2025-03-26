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
            <div className="fixed bottom-0 left-0 w-full text-center p-0.5 text-gray-300 font-mono">
                <p>{`© ${year}. Designed and Developed by Wayne Guo.`}</p>
            </div>
        </Fragment>
    );
};

export default Footer;