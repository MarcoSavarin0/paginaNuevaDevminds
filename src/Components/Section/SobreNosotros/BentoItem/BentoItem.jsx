/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
export const BentoItem = ({isVisible}) => {
    const controls = useAnimation();

    useEffect(() => {
        if (isVisible) {
            controls.start('visible');
        }
        
    }, [controls, isVisible]);
    const containerVariants = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            rotate: 360, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    }
    return (
        <motion.article
            className='content-sobreNosotros'
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <div className='transparete-fondo'></div>
            <div className='imagen-fondo'></div>
            <div className='texto-sobrenosotros'>
                <h2>Nuestra Historia</h2>
                <p>
                    Bienvenidos a nuestro mundo. En <strong>Tu Empresa</strong>, nos apasiona lo que hacemos y estamos comprometidos con la excelencia.
                </p>
                <p>
                    Desde nuestros inicios, hemos buscado constantemente la innovación y la calidad en todo lo que hacemos. Cada día, trabajamos para superar las expectativas y ofrecer soluciones excepcionales a nuestros clientes.
                </p>
            </div>
        </motion.article>
    )
}
