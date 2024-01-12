/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

export const TeamCard = ({ props, isVisible }) => {
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
        hidden: { y: 10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    return (
        <>
            {props.map((items, index) => (
                <motion.div key={index} className='card-container'
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div className='image-background' style={{ backgroundImage: `url(${items.imageUrl})` }}>
                        <motion.div className="backgorund-hovercard">
                            <motion.div className="content-card">
                                <motion.div className='link-redes'>
                                    <motion.a href={`${items.urlRedes}`} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></motion.a>
                                </motion.div>
                                <motion.h4 className='nombre-card'>{items.nombre}</motion.h4>
                                <motion.p className='edad-card'>{items.edad}</motion.p>
                                <motion.p className='posicion-card'>{items.posicion}</motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            ))}

        </>
    )
}
