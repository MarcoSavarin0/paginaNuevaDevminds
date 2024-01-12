/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { TeamCard } from '../../Cards/TeamCard'
import { motion, AnimatePresence } from 'framer-motion';

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
    const team = [
        {
            imageUrl: 'https://pbs.twimg.com/media/F3DJ7YLWQAACFWO.jpg',
            nombre: 'Mauro Lombardo',
            edad: '27 años',
            posicion: 'Desarrollador de software',
            urlRedes: 'https://www.instagram.com/duki/'
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/b8/9e/f4/b89ef40220de7c7c101b6be31d7b22c4.jpg',
            nombre: 'Lionel Messi',
            edad: '36 años',
            posicion: 'Desarrollador de software'
        },
        {
            imageUrl: 'https://topceos.net/wp-content/uploads/2017/05/bill-gates.jpeg',
            nombre: 'Bill Gates',
            edad: '60 años',
            posicion: 'Desarrollador de software'
        }
    ]
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
                        <TeamCard props={team} isVisible={isVisible} />
                    </div>
                </motion.main>
            </motion.section>
    )
}
