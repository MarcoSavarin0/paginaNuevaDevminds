/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Cards/ServiceCard';
import imagenServicios from '../../../assets/5.png'
import { motion, AnimatePresence } from 'framer-motion';

export const Servicio = () => {
  const [isVisible, setIsVisible] = useState(false);

  const serviceItems = [
    { id: 1, title: 'Desarrollo de Software', subtitle: ' Ofrecemos servicios de desarrollo de software personalizado para satisfacer las necesidades específicas de tu empresa.' },
    { id: 2, title: 'Diseño de Experiencia de Usuario (UX)', subtitle: ' Creamos experiencias de usuario cautivadoras y amigables para garantizar la satisfacción de tus usuarios.' },
    { id: 3, title: 'Ciberseguridad', subtitle: ' Protegemos tus sistemas y datos contra amenazas cibernéticas mediante soluciones avanzadas de seguridad.' }, {
      id: 4, title: 'Desarrollo de Aplicaciones Móviles', subtitle: ' reamos aplicaciones móviles innovadoras que impulsan la interacción y el compromiso del usuario.'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const serviciosElement = document.getElementById('servicios');
      if (serviciosElement) {
        const rect = serviciosElement.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <>
     
      <motion.section className={`container-servicios ${isVisible ? 'visible' : 'hidden'}`}
        id='servicios'
        variants={containerVariants}
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}>

        <main className='main-serviceBox'>

          <ServiceCard items={serviceItems} isVisible={isVisible} />
        </main>
        <div className='container-imagen-servicio'>
          <img src={imagenServicios} alt="Servicios Imagen" />
        </div>
      </motion.section>
    </>
  );
};
