import { useState, useEffect } from 'react'
import IconClose from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({ setModal, styles, setStyles, guardarGasto, editar }) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState([]);

    const [mensaje, setMensaje] = useState('');
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(() => {
        if (Object.keys(editar).length > 0) {
            setNombre(editar.nombre)
            setCantidad(editar.cantidad)
            setCategoria(editar.categoria)
            setId(editar.id)
            setFecha(editar.fecha)
        }
    }, []);

    const handleClose = () => {

        setStyles(false);

        setTimeout(() => {
            setModal(false);
        }, 700);
    }


    const handleSubmit = e => {

        e.preventDefault();

        //valida que ninguno de los onjetos este vacio
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios');
        } else {
            guardarGasto({ nombre, cantidad, categoria, id, fecha });
        }
    }

    return (
        <div className="modal">
            <div className='cerrar-modal'>
                <img src={IconClose} alt='close' onClick={handleClose} />
            </div>
            <form className={`formulario ${styles ? 'animar' : 'cerrar'}`}
                onSubmit={handleSubmit}>
                <legend>{editar.id ? 'Editar gasto' : 'Nuevo gasto'}</legend>
                <div className='campo'>
                    <label htmlFor='nombre'>Nombre de Gasto</label>
                    <input
                        id='nombre'
                        type='text'
                        placeholder='Nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input
                        id='cantidad'
                        type='number'
                        placeholder='Cantidad'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoría</label>
                    <select id='categoria' onChange={e => setCategoria(e.target.value)}
                        value={categoria}
                    >
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
                {mensaje && <Mensaje type='error'>{mensaje}</Mensaje>}
                <input type="submit" value={editar.id ? 'Editar gasto' : 'Agregar nuevo gasto'} />
            </form>
        </div>
    )
}

export default Modal