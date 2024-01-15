/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { AnimationComponentCards } from '../Animations/AnimationComponentCards';
export const ProyectosCard = ({ props, isVisible }) => {

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
    return (
        <>
            {props.map((items, index) => (
                <AnimationComponentCards
                    key={index}
                    claseNombre={'cardProyecto-container'}
                    isVisible={isVisible}
                    containerVariants={containerVariants}
                >
                    <motion.div className='imageProyecto-background' style={{ backgroundImage: `url(${items.imageUrl})` }}>
                        <motion.div className="backgorundProyecto-hovercard">
                            <motion.div className="contentProyecto-card">
                                <motion.div className='linkProyecto-redes'>
                                    <motion.a href={`${items.urlRedes}`} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></motion.a>
                                </motion.div>
                                <motion.h4 className='nombreProyecto-card'>{items.nombre}</motion.h4>
                                <motion.p className='TecnologiaProyecto-card'>
                                    {items.tecnologias.join(', ')}
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </AnimationComponentCards>
            ))}
        </>
    )
}
