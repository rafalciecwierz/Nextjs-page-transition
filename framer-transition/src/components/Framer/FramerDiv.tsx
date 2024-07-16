"use client"
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion'
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react'
interface FramerDivProps extends PropsWithChildren {
}
const FramerDiv: React.FC<FramerDivProps> = ({ children }) => {
    const pathname = usePathname()

    console.log(pathname);

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                {children}
            </motion.div>
        </AnimatePresence >
    )
}

export default FramerDiv