import IconClose from '../img/cerrar.svg'

const Modal = ({ setModal, styles, setStyles }) => {

    const handleClose = () => {

        setStyles(false);

        setTimeout(() => {
            setModal(false);
        }, 700);
    }

    return (
        <div className="modal">
            <div className='cerrar-modal'>
                <img src={IconClose} alt='close' onClick={handleClose} />
            </div>
            <form className={`formulario ${styles ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo gasto</legend>
                <input />
            </form>
        </div>
    )
}

export default Modal