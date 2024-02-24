// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Logo from '../../assets/LOGO200.png';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className={`navbar-container ${menuVisible ? 'menu-visible' : ''}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        className="logo-container">
        <Link to='header' alt='inicio' smooth={true} duration={500} > <img src={Logo} alt="Logo Devminds" /></Link>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className={`menu ${menuVisible ? 'show' : ''}`}>
        <div className='hamburger-button' onClick={toggleMenu}>
          <i className='fa-solid fa-times'></i>
        </div>
        <li><Link alt='Servicios' to="servicios" smooth={true} duration={500} >Servicios</Link></li>
        {/* <li><Link alt='Sobre Nosotros' to='sobreNosotros' smooth={true} duration={500}>Sobre Nosotros</Link ></li> */}
        <li><Link alt='Equipo' to="equipo" smooth={true} duration={500}>Equipo</Link></li>
        <li><Link alt='Proyectos' to="proyectos" smooth={true} duration={500}>Proyectos</Link ></li>
        <li><Link alt='Contacto' to="planes" smooth={true} duration={500}>Planes</Link></li>
        <li><Link alt='Contacto' to="contact" smooth={true} duration={500}>Contacto</Link></li>

      </motion.ul>
      <div className='hamburger-button' onClick={toggleMenu}>
        <i className={`fa-solid fa-${menuVisible ? '' : 'bars'}`}></i>
      </div>
    </nav>
  );
};