import { motion } from "framer-motion"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
            repeat: Infinity,     // 🔥 infinite loop
            repeatDelay: 2        // pause after full animation
        }
    }
}

const word = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

function Header() {
    const text = "🔱 Har Har Mahadev 🔱".split(" ")

    return (
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-center py-4 overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="text-2xl font-bold text-green-400 flex justify-center gap-2"
            >
                {text.map((item, index) => (
                    <motion.span key={index} variants={word}>
                        {item}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    )
}

export default Header