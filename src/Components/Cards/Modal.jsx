/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
const Modal = ({ item, onClose }) => {
    const modalVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <motion.div className="modal" variants={modalVariants} initial="hidden" animate="visible" exit="hidden">
            <div className="modal-content">
                <h2>{item.title}</h2>
                <h5>{item.subtitle}</h5>
                <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={onClose}>Cerrar</motion.button>
            </div>
        </motion.div>
    );
};

export default Modal;
