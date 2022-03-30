import { useState, useEffect } from 'react'

const Filtros = ({ filtro, setFiltro }) => {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label>Filtrar gastos: </label>
                    <select id='filtro'
                        value={filtro}
                        onChange={e => setFiltro(e.target.value)}>
                        <option value="">-- Tipo de gasto --</option>
                        <option value="casa">Casa</option>
                        <option value="comida">Comida</option>
                        <option value="gastos">Gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="ahorros">Ahorros</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros