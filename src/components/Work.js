import React from "react";
import { motion } from "framer-motion";
import "../styles/work.css";
import Projects from "./Projects"; // Import the projects section
import PhoneMockup from "./hello-world-html-code.png"; // ✅ Import the phone image

const Work = () => {
  return (
    <section className="work">
      <motion.h2 
        className="work-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Work
      </motion.h2>

      <div className="work-container">
        {/* Left Side: Phone Mockup */}
        <motion.div 
          className="phone-mockup"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={PhoneMockup} alt="Phone Mockup" />
        </motion.div>

        {/* Right Side: Projects */}
        <motion.div 
          className="projects-list"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
