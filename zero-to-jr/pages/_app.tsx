import "../styles/styles.scss"
import type { AppProps } from 'next/app'
import { motion } from "framer-motion"

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <motion.div
        initial={slideRight.variants.initial}
        animate={slideRight.variants.animate}
        exit={slideRight.variants.exit}
        transition={slideRight.transition}
      >
        <Component {...pageProps} />
      </motion.div>
    </>

  )
}

export default MyApp
