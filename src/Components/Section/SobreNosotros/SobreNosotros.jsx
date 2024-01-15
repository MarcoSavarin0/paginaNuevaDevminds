/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BentoItem } from './BentoItem/BentoItem'
import { motion } from 'framer-motion'

export const SobreNosotros = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('sobreNosotros');
            if (section) {
                const rect = section.getBoundingClientRect();
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    return (
        <section className='container-sobreNosotros' id='sobreNosotros'>
            <motion.main
                className={`sobrenosotros ${isVisible ? 'visible' : 'hidden'}`}
                variants={containerVariants}
                initial='hidden'
                animate={isVisible ? 'visible' : 'hidden'}
            >
                <BentoItem isVisible={isVisible}></BentoItem>
                <BentoItem isVisible={isVisible}></BentoItem>
                <BentoItem isVisible={isVisible}></BentoItem>
            </motion.main>
        </section>
    )
}
