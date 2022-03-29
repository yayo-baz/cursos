
import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import List from './components/List'
import { generarId } from './helpers/index'
import IconAdd from './img/nuevo-gasto.svg'

function App() {

  /* Declaracion de hooks useState*/
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [styles, setStyles] = useState(false);

  const [gastos, setGastos] = useState([]);

  /* Declaracion de hooks useEffect - Se ejecutan en orden de declaracion*/

  /* Declaracion de metodos de apoyo */
  const handleAdd = (e) => {
    e.preventDefault();
    setModal(true);

    setTimeout(() => {
      setStyles(true);
    }, 1000);
  }

  const guardarGasto = gasto => {

    gasto.id = generarId();

    setGastos([...gastos, gasto]);

    setStyles(false);

    setTimeout(() => {
      setModal(false);
    }, 700);

  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto &&
        (
          <>
            <main>
              <List gastos={gastos} />
            </main>
            <div className='nuevo-gasto'>
              <img src={IconAdd} alt="add"
                onClick={handleAdd} />
            </div>
          </>
        )}

      {modal && <Modal
        setModal={setModal}
        styles={styles}
        setStyles={setStyles}
        guardarGasto={guardarGasto} />}
    </div>
  )
}

export default App
