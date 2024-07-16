"use client"
import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
interface FramerDivProps extends PropsWithChildren {
}
const FramerDiv: React.FC<FramerDivProps> = ({ children }) => {
    return (
        <motion.div
            key="bouncy-box"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
                type: 'spring', bounce: 3.1, stiffness: 300,
                ease: "easeOut", duration: 0.3
            }}
        >
            {children}
        </motion.div>
    )
}

export default FramerDiv