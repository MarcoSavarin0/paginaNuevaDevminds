/* eslint-disable no-unused-vars */
import React from 'react'
import { TeamCard } from '../../Cards/TeamCard'
export const Equipo = () => {
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
        <section className='section-equipo' id='equipo'>
            <main className='main-equipo'>
                <div className="content-equipo">
                    <TeamCard props={team}/>
                </div>
            </main>
        </section>
    )
}
