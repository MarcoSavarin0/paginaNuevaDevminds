/* eslint-disable no-unused-vars */
import React from 'react'
import { SobreNosotros } from './SobreNosotros/SobreNosotros'
import { Servicio } from './Servicios/Servicio'
import { Equipo } from './Equipo/Equipo'
import { Proyectos } from './Proyectos/Proyectos'

export const Section = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <Servicio />
        <Equipo />
        <Proyectos />

      </div>

    </>
  )
}
