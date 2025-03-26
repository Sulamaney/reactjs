import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["Front-end Developer"];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Changes text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h2
      key={roles[index]}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="animated-text"
    >
      {roles[index]}
    </motion.h2>
  );
};

export default AnimatedText;
