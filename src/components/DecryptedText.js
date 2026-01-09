import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: 'easeIn' },
  },
};

const DecryptedText = ({ text, animateOn = 'view', revealDirection = 'center' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={inView && animateOn === 'view' ? 'visible' : 'hidden'}
      variants={textVariants}
      style={{
        display: 'inline-block',
        textAlign: revealDirection === 'center' ? 'center' : 'left',
      }}
    >
      {text}
    </motion.span>
  );
};

export default DecryptedText;
