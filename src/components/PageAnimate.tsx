import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const animations = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

const PageAnimate = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animations}
      transition={{ duration: 0.5 }}
    >
      {children || null}
    </motion.div>
  );
};

export default PageAnimate;
