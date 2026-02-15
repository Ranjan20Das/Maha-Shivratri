import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue } from "framer-motion"

function Mantra() {

    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentLine, setCurrentLine] = useState(0)

    // ✅ Google Drive Direct Audio Link
    const audioUrl = "https://res.cloudinary.com/dii46eboj/video/upload/v1771155059/audio2_n7oe74.mp3"

    // 🔱 Mouse Rotation Values
    const rotateX = useMotionValue(0)
    const rotateY = useMotionValue(0)

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window

        const x = (e.clientY / innerHeight - 0.5) * 25
        const y = (e.clientX / innerWidth - 0.5) * 25

        rotateX.set(-x)
        rotateY.set(y)
    }

    // 🔥 Mantra timestamps (adjust if needed)
    const mantra = [
        { text: "ॐ त्र्यम्बकं यजामहे", time: 0 },
        { text: "सुगन्धिं पुष्टिवर्धनम् ।", time: 6 },
        { text: "उर्वारुकमिव बन्धनान्", time: 12 },
        { text: "मृत्योर्मुक्षीय मामृतात् ॥", time: 18 }
    ]

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    // 🔥 Sync lyrics with audio
    useEffect(() => {
        const audio = audioRef.current

        const updateLyrics = () => {
            const currentTime = audio.currentTime

            for (let i = mantra.length - 1; i >= 0; i--) {
                if (currentTime >= mantra[i].time) {
                    setCurrentLine(i)
                    break
                }
            }
        }

        audio.addEventListener("timeupdate", updateLyrics)

        return () => {
            audio.removeEventListener("timeupdate", updateLyrics)
        }
    }, [])

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-900 px-4 overflow-hidden"
        >

            {/* 🔱 LEFT 3D OM */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                    textShadow: "0px 0px 30px #22c55e"
                }}
                animate={{
                    rotateY: 360,
                    rotateX: [0, 15, 0],
                }}
                transition={{
                    rotateY: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    },
                    rotateX: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }
                }}
                className="hidden md:block absolute left-10 text-[180px] text-green-400 opacity-80"
            >
                🕉️
            </motion.div>

            {/* 🔱 RIGHT 3D OM */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                    textShadow: "0px 0px 30px #22c55e"
                }}
                animate={{
                    rotateY: -360,
                    rotateX: [0, 15, 0],
                }}
                transition={{
                    rotateY: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    },
                    rotateX: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }
                }}
                className="hidden md:block absolute right-10 text-[180px] text-green-400 opacity-80"
            >
                🕉️
            </motion.div>

            {/* 🔥 MAIN CARD */}
            <div className="relative z-10 bg-blue-900/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-blue-700 max-w-2xl w-full">

                <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">
                    🕉️ Maha Mrityunjaya Mantra 🕉️  Wait for few seconds
                </h1>

                {/* 🔥 Synced Lyrics */}
                <div className="space-y-6 mb-8">
                    {mantra.map((line, index) => (
                        <motion.p
                            key={index}
                            animate={{
                                scale: currentLine === index ? 1.1 : 1,
                                opacity: currentLine === index ? 1 : 0.5
                            }}
                            transition={{ duration: 0.4 }}
                            className={`text-xl md:text-2xl font-semibold transition-all duration-300 ${currentLine === index
                                ? "text-yellow-300 drop-shadow-[0_0_15px_#facc15]"
                                : "text-gray-400"
                                }`}
                        >
                            {line.text}
                        </motion.p>
                    ))}
                </div>

                {/* ✅ Updated Audio */}
                <audio ref={audioRef} src={audioUrl} />

                <button
                    onClick={toggleAudio}
                    className="bg-green-500 hover:bg-green-600 transition duration-300 text-black font-semibold px-6 py-2 rounded-full shadow-lg"
                >
                    {isPlaying ? "Pause Mantra 🙏" : "Play Full Mantra 🔊"}
                </button>

            </div>

        </div>
    )
}

export default Mantra