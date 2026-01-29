import { motion } from 'framer-motion'

const AnimatedSection = ({ children, className, id, delay = 0, ...props }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
