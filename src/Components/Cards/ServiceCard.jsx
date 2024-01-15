/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Modal from './Modal';

const ServiceCard = ({ items, isVisible }) => {
  const [selectedId, setSelectedId] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }
  }, [controls, isVisible]);

  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const modalContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="service-container"
      >
        {items.map((item, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`scroll-parallax${selectedId === item.id ? 'selected' : ''}`}
          >
            <motion.div className="service">
              <motion.h2>{item.title}</motion.h2>
              <motion.h5>{item.subtitle}</motion.h5>
            </motion.div>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="modal-container"
              
              variants={modalContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Modal item={items.find(item => item.id === selectedId)} onClose={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ServiceCard;
