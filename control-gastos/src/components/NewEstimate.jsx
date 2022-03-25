import { useState } from "react";
import Mensaje from "./Mensaje";

const NewEstimate = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setMensaje('Solo puedes ingresar numeros...');
            return
        }

        setMensaje('')
        setIsValidPresupuesto(true)

    }

    return (
        <div>
            <h2 className="contenedor-presupuesto contenedor sombra">
                <form onSubmit={handlePresupuesto} className="formulario">
                    <div className="campo">

                        <label htmlFor="presupuesto">Definir presupuesto:</label>

                        <input className="nuevo-presupuesto"
                            id="presupuesto"
                            type="number"
                            placeholder="Añade tu presupuesto"
                            value={presupuesto}
                            onChange={e => setPresupuesto(Number(e.target.value))} />

                        <input type="submit" value="Añadir" />
                    </div>
                    {mensaje && <Mensaje type="error">{mensaje}</Mensaje>}
                </form>

            </h2>
        </div>
    )
}

export default NewEstimate