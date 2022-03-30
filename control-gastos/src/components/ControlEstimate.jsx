import { useState, useEffect } from "react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlEstimate = ({ presupuesto, setPresupuesto, gastos, setGastos, setIsValidPresupuesto }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    const [porcentaje, setPorcentaje] = useState(0);


    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

    }

    useEffect(() => {
        //Cada que gastos tenga un cambio, useEffect manejara el cambio hacia el state

        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);

        const totalDisponible = presupuesto - totalGastado;

        const totalPorcentaje = ((presupuesto - totalDisponible) / presupuesto * 100).toFixed(2);

        setGastado(totalGastado);
        setDisponible(totalDisponible);
        setPorcentaje(totalPorcentaje);

    }, [gastos]);

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar el presupuesto de gastos?');

        if (resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    value={porcentaje}
                    text={`${porcentaje}%`} />;
            </div>
            <div className="contenido-presupuesto">
                <button
                    onClick={handleResetApp}
                    className="reset-app"
                    type="button">
                    Reiniciar Presupuesto
                </button>
                <p>
                    <span>Presupuesto: </span> {formatAmount(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span> {formatAmount(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatAmount(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlEstimate