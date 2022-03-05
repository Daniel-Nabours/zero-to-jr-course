import { motion } from "framer-motion"
import React, { ReactNode } from "react"

type Props = {
    children: ReactNode
}

function PageTransition({ children }: Props) {

    const slideRight = {
        name: 'Slide Right',
        variants: {
            initial: {
                opacity: 0,
                left: '-100%',
                scale: 0.6
            },
            animate: {
                opacity: 1,
                left: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                left: '100%',
                scale: 0.6
            }
        },
        transition: {
            duration: 0.7
        }
    }

    return ( 
            <motion.main
                key={"initTransition"}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={slideRight.transition}
                variants={slideRight.variants}
            >
                {children}
            </motion.main> 

    )
}

export default PageTransition