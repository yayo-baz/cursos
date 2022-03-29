import { useState } from 'react'
import IconClose from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({ setModal, styles, setStyles, guardarGasto }) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState([]);

    const [mensaje, setMensaje] = useState('');

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
        }

        guardarGasto({ nombre, cantidad, categoria });
    }

    return (
        <div className="modal">
            <div className='cerrar-modal'>
                <img src={IconClose} alt='close' onClick={handleClose} />
            </div>
            <form className={`formulario ${styles ? 'animar' : 'cerrar'}`}
                onSubmit={handleSubmit}>
                <legend>Nuevo gasto</legend>
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
                    <select id='categoria'
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Selecciona una Categoría --</option>
                        <option value="ahorros">Ahorros</option>
                        <option value="casa">Casa</option>
                        <option value="comida">Comida</option>
                        <option value="gastos">Gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                {mensaje && <Mensaje type='error'>{mensaje}</Mensaje>}
                <input type="submit" value="Añadir gasto" />
            </form>
        </div>
    )
}

export default Modal