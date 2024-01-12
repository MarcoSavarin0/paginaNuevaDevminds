/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const TeamCard = ({ props }) => {
    return (
        <>
            {props.map((items, index) => (
                <div key={index} className='card-container'>
                    <div className='image-background' style={{ backgroundImage: `url(${items.imageUrl})` }}>
                        <div className="backgorund-hovercard">
                            <div className="content-card">
                                <div className='link-redes'>
                                    <a href={`${items.urlRedes}`} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
                                </div>
                                <h4 className='nombre-card'>{items.nombre}</h4>
                                <p className='edad-card'>{items.edad}</p>
                                <p className='posicion-card'>{items.posicion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
