"use client";

import { motion, AnimatePresence } from "framer-motion"

export default function Layout ({
children,
}: {
children: React.ReactNode
}) {
    return <AnimatePresence> { (
        <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:20}}
            transition={{ease:"easeOut",duration:.25}}
        >
            {children}
        </motion.div>
    ) }
    </AnimatePresence>
}