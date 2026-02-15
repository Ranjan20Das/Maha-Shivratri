import { Link } from "react-router-dom"
import React from "react";

function Navbar() {
    return (
        <div className="sticky top-0 z-50 bg-blue-950 border-b border-blue-800 shadow-md">
            <div className="flex justify-center gap-8 py-4 text-white font-medium">

                <Link
                    to="/"
                    className="hover:text-green-400 transition duration-300"
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    className="hover:text-green-400 transition duration-300"
                >
                    About
                </Link>

                <Link
                    to="/mantra"
                    className="hover:text-green-400 transition duration-300"
                >
                    Mantra
                </Link>

                <Link
                    to="/gallery"
                    className="hover:text-green-400 transition duration-300"
                >
                    Gallery
                </Link>

            </div>
        </div>
    )
}

export default Navbar
