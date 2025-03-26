import React from "react";
import { FaCode, FaMobileAlt, FaPalette, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/expertise.css";
import Hello from "./hello-world-html-code.png";


const expertiseData = [
  {
    icon: <FaCode className="expertise-icon" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    },
  {
    icon: <FaPalette className="expertise-icon" />,
    title: "UI/UX Design",
    description:
      "Designing beautiful, intuitive, and user-friendly interfaces using Figma and Adobe XD.",
     
    },
  {
    icon: <FaServer className="expertise-icon" />,
    title: "Backend Development",
    description:
      "Developing scalable and efficient backend systems with Node.js, Express, and Firebase.",
    
    },
];

const Expertise = () => {
  return (
    <section className="expertise">
      <motion.h2 
        className="expertise-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Expertise
      </motion.h2>
      
      <div className="expertise-container">
        {expertiseData.map((item, index) => (
          <motion.div 
            key={index} 
            className="expertise-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
        
        <div className="sodiq">
          <img src={Hello} alt="Hello World Code" className="sodiq" />
        </div>
        
      </div>
    </section>
  );
};

export default Expertise;
