/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { TeamCard } from '../../Cards/TeamCard'
import { motion } from 'framer-motion';
import equipoTexto from '../../Texto/Equipo/Equipo';

export const Equipo = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('equipo');
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
            <motion.section
                className="section-equipo"
                id='equipo'>
                <motion.main className={`main-equipo${isVisible ? 'visible' : 'hidden'}`}
                    variants={containerVariants}
                    initial='hidden'
                    animate={isVisible ? 'visible' : 'hidden'}
                >
                    <div className="content-equipo">
                        <TeamCard props={equipoTexto} isVisible={isVisible} />
                    </div>
                </motion.main>
            </motion.section>
    )
}
