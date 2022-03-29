import React from 'react'
import Gastos from './Gastos'

const List = ({ gastos }) => {
    return (
        <div className='contenedor'>
            <h2 className='no-gastos'>{gastos.length ? 'Lista de gastos' : 'No hay gastos...'}</h2>
            {
                gastos.map(element => {
                    return <Gastos key={element.id} gasto={element} />
                })
            }
        </div>
    )
}

export default List