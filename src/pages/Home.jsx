import { useRef, useState } from "react"
import { motion } from "framer-motion"
import React from "react";

import image1 from "../assets/images/image1.jpg"

function Home() {

    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    // ✅ Google Drive Direct Audio Link
    const audioUrl = "https://res.cloudinary.com/dii46eboj/video/upload/v1771155060/audio1_te1dr4.mp3"

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-900 px-4">

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="bg-blue-900/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-blue-700 max-w-lg w-full"
            >

                {/* Heading */}
                <motion.h1
                    animate={{
                        opacity: [1, 0.5, 1],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-4xl md:text-5xl font-bold text-green-400 mb-6"
                >
                    Happy MahaShivratri 🙏
                </motion.h1>

                {/* Image */}
                <motion.img
                    src={image1}
                    alt="Shivji"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="w-72 mx-auto rounded-xl shadow-lg mb-6"
                />

                {/* Audio Element (hidden) */}
                <audio ref={audioRef} src={audioUrl} />

                {/* Button */}
                <button
                    onClick={toggleAudio}
                    className="bg-green-500 hover:bg-green-600 transition duration-300 text-black font-semibold px-6 py-2 rounded-full shadow-lg"
                >
                    {isPlaying ? "Pause Mantra 🙏" : "Play Mantra 🔊"}
                </button>

            </motion.div>

        </div>
    )
}

export default Home
