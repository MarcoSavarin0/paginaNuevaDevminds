// eslint-disable-next-line no-unused-vars
import React from 'react'
import imagenHeader from '../../assets/2.png'
import { motion } from "framer-motion"

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 2,
      }}
      id='header'>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
        }}
        className='contenedor-textoHeader'>
        <h1>Somos DevMinds</h1>
        <h3>Compania Desarrolladora de Software</h3>
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>Contact Us</motion.button>
      </motion.div>
      <motion.div
        initial={{ rotate: -55 }}
        animate={{ rotate: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
        }}
        className='contenedor-imagen'>
        <img src={imagenHeader} alt="Ilustracion" />
      </motion.div>
    </motion.header>
  )
}
