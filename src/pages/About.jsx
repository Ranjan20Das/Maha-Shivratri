import { motion } from "framer-motion"
import image2 from "../assets/images/image2.jpeg"

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 px-4 py-16">

            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-12"
            >
                🙏 About Maha Shivratri 🙏
            </motion.h1>

            {/* Image Section */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center mb-12"
            >
                <img
                    src={image2}
                    alt="Shiv Parvati"
                    className="w-80 md:w-96 rounded-2xl shadow-2xl border border-blue-700"
                />
            </motion.div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {/* Card 1 */}
                <motion.div
                    animate={{
                        boxShadow: [
                            "0px 0px 10px #22c55e",
                            "0px 0px 25px #22c55e",
                            "0px 0px 10px #22c55e"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-900/40 backdrop-blur-lg border border-blue-700 rounded-2xl p-6"
                >
                    <h2 className="text-2xl font-semibold text-green-400 mb-3">
                        🔱 Significance
                    </h2>
                    <p className="text-gray-300">
                        Maha Shivratri marks the divine union of Lord Shiva and Goddess Parvati.
                        It is a night of devotion, meditation, and spiritual awakening.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    animate={{
                        boxShadow: [
                            "0px 0px 10px #22c55e",
                            "0px 0px 25px #22c55e",
                            "0px 0px 10px #22c55e"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-900/40 backdrop-blur-lg border border-blue-700 rounded-2xl p-6"
                >
                    <h2 className="text-2xl font-semibold text-green-400 mb-3">
                        🧘 Spiritual Meaning
                    </h2>
                    <p className="text-gray-300">
                        This sacred night symbolizes the destruction of ignorance and negativity,
                        allowing divine consciousness to rise within.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    animate={{
                        boxShadow: [
                            "0px 0px 10px #22c55e",
                            "0px 0px 25px #22c55e",
                            "0px 0px 10px #22c55e"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-900/40 backdrop-blur-lg border border-blue-700 rounded-2xl p-6"
                >
                    <h2 className="text-2xl font-semibold text-green-400 mb-3">
                        🕉️ Rituals
                    </h2>
                    <p className="text-gray-300">
                        Devotees observe fasting, perform Rudrabhishek of Mahadev, Chant
                        "Om Namah Shivaya", and stay awake through the night in prayer.
                    </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    animate={{
                        boxShadow: [
                            "0px 0px 10px #22c55e",
                            "0px 0px 25px #22c55e",
                            "0px 0px 10px #22c55e"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-900/40 backdrop-blur-lg border border-blue-700 rounded-2xl p-6"
                >
                    <h2 className="text-2xl font-semibold text-green-400 mb-3">
                        🔥 Spiritual Benefits
                    </h2>
                    <p className="text-gray-300">
                        Maha Shivratri brings peace, strength, clarity of mind,
                        and spiritual growth to those who observe it with devotion.
                    </p>
                </motion.div>

            </div>

        </div>
    )
}

export default About