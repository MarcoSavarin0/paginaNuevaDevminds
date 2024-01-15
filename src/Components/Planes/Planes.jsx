/* eslint-disable no-unused-vars */
import React from 'react'
import serviciosSolucionesIT from '../Texto/Planes/Planes'
import { CardPlanes } from '../Cards/CardPlanes'
export const Planes = () => {
  return (
    <section className='Planes-section' id='planes'>
      <div className='planes-container'>
        <main className='content-planes'>
          <CardPlanes isVisible={true} props={serviciosSolucionesIT} />
        </main>
      </div>
    </section>
  )
}
