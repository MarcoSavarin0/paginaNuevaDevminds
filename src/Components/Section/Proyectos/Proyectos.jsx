/* eslint-disable no-unused-vars */
import React from 'react'
import { ProyectosCard } from '../../Cards/ProyectosCard'
import proyectosData from '../../Texto/Proyectos/Proyectos'
export const Proyectos = () => {
    return (
        <section className='proyectos-container' id='proyectos'>
            <main className='proyectos-cardsContainer'>
                <div className='content-cardProyectos'> 
                <ProyectosCard props={proyectosData} isVisible={true} />
                </div>
            </main>
        </section>
    )
}
