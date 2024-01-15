/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { AnimationComponentCards } from '../Animations/AnimationComponentCards';

export const CardPlanes = ({ props, isVisible }) => {
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

  const cardHoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <>
      {props.map((items, index) => (
        <AnimationComponentCards
          key={index}
          claseNombre={'cardPlanes-container'}
          isVisible={isVisible}
          containerVariants={containerVariants}
        >
          <motion.div
            className="backgorundPlanes-hovercard"
            whileHover="hover"
            variants={cardHoverVariants}
          >
            <motion.div className="contentPlanes-card">
              <motion.h4 className="nombrePlanes-card">{items.nombre}</motion.h4>

              <motion.ul className="itemsPlanes-card-ul">
                {items.puntos.map((item, index) => (
                  <motion.li key={index} className="itemsPlanes-card-li">
                    + {item}
                  </motion.li>
                ))}
              </motion.ul>
              <div className="desPrecio-wrapper">
                <p className="descPlanes-card">{items.descripcion}</p>
                <motion.p className="precioPlanes-card">{items.precio}</motion.p>
              </div>
              <div className="div-botonPlan">
                <a className="boton-planes">Saber Mas</a>
              </div>
            </motion.div>
          </motion.div>
        </AnimationComponentCards>
      ))}
    </>
  );
};