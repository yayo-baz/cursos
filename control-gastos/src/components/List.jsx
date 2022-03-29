import React from 'react'
import Gastos from './Gastos'

const List = ({ gastos }) => {
    return (
        <div>
            <h1>{gastos.length ? 'Lista de gastos' : 'No hay gastos...'}</h1>

            {
                gastos.map(element => {
                    return <Gastos key={element.id} gasto={element} />
                })
            }
        </div>
    )
}

export default List