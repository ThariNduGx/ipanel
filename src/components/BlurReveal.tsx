import { motion } from 'motion/react';
import { ReactNode, Key } from 'react';

export function BlurReveal({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string, key?: Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
