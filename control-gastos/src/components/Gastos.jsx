import React from 'react'
import { formatearFecha } from '../helpers/index'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
  ahorros: IconoAhorro,
  casa: IconoCasa,
  comida: IconoComida,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones
}

const Gastos = ({ gasto }) => {
  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img
          src={diccionarioIconos[gasto.categoria]}
          alt={gasto.nombre} />
        <div className='descripcion-gasto'>
          <p className='categoria'>{gasto.categoria}</p>
          <p className='nombre-gasto'>{gasto.nombre}</p>
          <p className='fecha-gasto'>{formatearFecha(gasto.fecha)}</p>
        </div>
      </div>
      <p className='cantidad-gasto'>${gasto.cantidad}</p>
    </div>
  )
}

export default Gastos