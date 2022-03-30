import NewEstimate from "./NewEstimate"
import ControlEstimate from "./ControlEstimate"

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos }) => {

    return (
        <header>
            <h1>Calculador de presupuesto</h1>

            {isValidPresupuesto ?
                <ControlEstimate
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto} />
                :
                <NewEstimate
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            }
        </header>
    )
}

export default Header