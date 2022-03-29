import NewEstimate from "./NewEstimate"
import ControlEstimate from "./ControlEstimate"

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos }) => {



    return (
        <header>
            <h1>Calculador de presupuesto</h1>

            {isValidPresupuesto ?
                <ControlEstimate gastos={gastos} presupuesto={presupuesto} />
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