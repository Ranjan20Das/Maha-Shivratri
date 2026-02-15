import { motion } from "framer-motion"

const container = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 2,
            staggerChildren: 0.25
        }
    }
}

const word = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
}

function Footer() {
    const text =
        "Made with devotion ❤️ || Ranjan Das Har Har Mahadev 🙏 @2026".split(" ")

    return (
        <div className="bg-blue-950 border-t border-blue-800 text-center py-4 text-sm text-gray-300 overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-1"
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

export default Footer