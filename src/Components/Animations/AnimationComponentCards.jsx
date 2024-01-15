/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const AnimationComponentCards = ({ children, isVisible, containerVariants, claseNombre}) => {
    const controls = useAnimation();

    useEffect(() => {
        if (isVisible) {
            controls.start('visible');
        }
    }, [controls, isVisible]);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className={claseNombre}
        >
            {children}
        </motion.div>
    );
};
