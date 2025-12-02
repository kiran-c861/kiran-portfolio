import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const words = children.split(' ');

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
}
