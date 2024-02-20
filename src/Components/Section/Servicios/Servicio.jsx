/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Cards/ServiceCard';
import imagenServicios from '../../../assets/5.png'
import { motion } from 'framer-motion';
import ServicioTexto from '../../Texto/Servicio/Servicio';


export const Servicio = () => {
  const [isVisible, setIsVisible] = useState(false);
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

          <ServiceCard items={ServicioTexto} isVisible={isVisible} />
        </main>
        <div className='container-imagen-servicio'>
          <img src={imagenServicios} className='imagen-servicios' alt="Servicios Imagen" />
        </div>
      </motion.section>
    </>
  );
};
