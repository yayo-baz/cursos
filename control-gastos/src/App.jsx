
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import List from './components/List'
import { generarId } from './helpers/index'
import IconAdd from './img/nuevo-gasto.svg'
import Filtros from './components/Filtros'

function App() {

  /* Declaracion de hooks useState*/
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('Presupuesto:') ?? 0));
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [styles, setStyles] = useState(false);

  const [gastos, setGastos] = useState(
    localStorage.getItem('Gastos:') ? JSON.parse(localStorage.getItem('Gastos:')) : []);

  const [editar, setEditar] = useState({});

  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  /* Declaracion de hooks useEffect - Se ejecutan en orden de declaracion*/

  /* Declaracion de metodos de apoyo */
  const handleAdd = (e) => {
    setModal(true);
    setEditar({})

    setTimeout(() => {
      setStyles(true);
    }, 300);
  }

  useEffect(() => {
    if (Object.keys(editar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setStyles(true);
      }, 300);
    }
  }, [editar]);

  const guardarGasto = gasto => {

    if (gasto.id) {
      const update = gastos.map(element => element.id === gasto.id ? gasto : element)
      setGastos(update);
      setEditar({});
    } else {

      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);

    }

    setStyles(false);
    setTimeout(() => {
      setModal(false);
    }, 700);

  }

  useEffect(() => {
    localStorage.setItem('Presupuesto:', presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem('Gastos:', JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    const local = Number(localStorage.getItem('Presupuesto:')) ?? 0;

    if (local > 0) {
      setIsValidPresupuesto(true)
    } else {
      setIsValidPresupuesto(false)
    }
  }, []);

  useEffect(() => {

    if (filtro) {

      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);

      setGastosFiltrados(gastosFiltrados);

    }
  }, [filtro]);

  const setEliminar = id => {

    const nuevoArr = gastos.filter(gasto => gasto.id !== id);

    setGastos(nuevoArr);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto &&
        (
          <>
            <main className='listado-gastos'>
              <Filtros filtro={filtro} setFiltro={setFiltro} />
              <List
                gastos={gastos}
                setEditar={setEditar}
                setEliminar={setEliminar}
                filtro={filtro}
                setFiltro={setFiltro}
                gastosFiltrados={gastosFiltrados} />
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
        guardarGasto={guardarGasto}
        editar={editar} />}
    </div>
  )
}

export default App
