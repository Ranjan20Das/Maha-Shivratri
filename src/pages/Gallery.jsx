import { motion } from "framer-motion"
import { useState, useRef } from "react"

import somnath from "../assets/images/somnath.jpg"
import mallikarjuna from "../assets/images/mallikarjuna.jpg"
import mahakaleshwar from "../assets/images/mahakaleshwar.jpg"
import omkareshwar from "../assets/images/omkareshwar.jpg"
import kedarnath from "../assets/images/kedarnath.jpg"
import bhimashankar from "../assets/images/bhimashankar.jpg"
import kashi from "../assets/images/kashi.jpg"
import trimbakeshwar from "../assets/images/trimbakeshwar.jpg"
import baidyanath from "../assets/images/baidyanath.jpg"
import nageshwar from "../assets/images/nageshwar.jpg"
import rameshwaram from "../assets/images/rameshwaram.jpg"
import grishneshwar from "../assets/images/grishneshwar.jpg"

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioref = useRef(null)

    // ✅ Google Drive Direct Audio Link
    const audioUrl = "https://res.cloudinary.com/dii46eboj/video/upload/v1771155059/audio3_jd6nu9.mp3"

    const toggleAudio = () => {
        if (!audioref.current) return

        if (isPlaying) {
            audioref.current.pause()
        } else {
            audioref.current.play()
        }

        setIsPlaying(!isPlaying)
    }

    const temples = [
        { name: "Somnath", location: "Gujarat", image: somnath },
        { name: "Mallikarjuna", location: "Andhra Pradesh", image: mallikarjuna },
        { name: "Mahakaleshwar", location: "Madhya Pradesh", image: mahakaleshwar },
        { name: "Omkareshwar", location: "Madhya Pradesh", image: omkareshwar },
        { name: "Kedarnath", location: "Uttarakhand", image: kedarnath },
        { name: "Bhimashankar", location: "Maharashtra", image: bhimashankar },
        { name: "Kashi Vishwanath", location: "Uttar Pradesh", image: kashi },
        { name: "Trimbakeshwar", location: "Maharashtra", image: trimbakeshwar },
        { name: "Baidyanath", location: "Jharkhand", image: baidyanath },
        { name: "Nageshwar", location: "Gujarat", image: nageshwar },
        { name: "Ramanathaswamy", location: "Tamil Nadu", image: rameshwaram },
        { name: "Grishneshwar", location: "Maharashtra", image: grishneshwar }
    ]

    return (
        <div className="min-h-screen bg-black px-6 py-16">
            <div className="flex items-center justify-center mb-16 gap-4">
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center">
                    🔱 12 Jyotirlingas of Lord Shiva 🔱
                </h1>

                <button
                    onClick={toggleAudio}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition duration-300"
                >
                    {isPlaying ? "⏸ Pause" : "▶ Play"}
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {temples.map((temple, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(temple.image)}
                    >
                        <img
                            src={temple.image}
                            alt={temple.name}
                            className="h-56 w-full object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold text-yellow-300">{temple.name}</h2>
                            <p className="text-gray-400 text-sm">{temple.location}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ✅ Updated Audio Source */}
            <audio ref={audioref} src={audioUrl} />

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Full View"
                        className="max-h-[90%] max-w-[90%] rounded-xl"
                    />
                </div>
            )}
        </div>
    )
}

export default Gallery