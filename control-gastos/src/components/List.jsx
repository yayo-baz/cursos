import React from 'react'
import Gastos from './Gastos'

const List = ({ gastos, setEditar, setEliminar, setFiltro, filtro, gastosFiltrados }) => {
    return (
        <div className='contenedor'>
            {
                filtro ? (
                    <>
                        <h2 className='no-gastos'>{gastosFiltrados.length ? 'Lista de gastos ' : 'No hay gastos con este filtro...'}</h2>
                        {
                            gastosFiltrados.map(element => {
                                return <Gastos
                                    key={element.id}
                                    gasto={element}
                                    setEditar={setEditar}
                                    setEliminar={setEliminar} />
                            })
                        }
                    </>
                ) : (
                    <>
                        <h2 className='no-gastos'>{gastos.length ? 'Lista de gastos' : 'No hay gastos...'}</h2>
                        {gastos.map(element => {
                            return <Gastos
                                key={element.id}
                                gasto={element}
                                setEditar={setEditar}
                                setEliminar={setEliminar} />
                        })}
                    </>
                )
            }
        </div>
    )
}

export default List