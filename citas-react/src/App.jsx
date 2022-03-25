import { useState, useEffect } from "react"
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import './App.css'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  useEffect(() => {

    const LS = JSON.parse(localStorage.getItem('Pacientes')) ?? []

    setPacientes(LS);

  }, []) // El useEffect solo se va a ejecutar una vez ya que no esta atado al estado de ningun objeto

  useEffect(() => {
    localStorage.setItem('Pacientes', JSON.stringify(pacientes))
  }, [pacientes])


  const eliminarPaciente = (id) => {

    //Filtramos el id del paciente a eliminar y generamos una nueva lista con los pacientes restantes
    const nuevaLista = pacientes.filter(eliminado => eliminado.id !== id)

    //Actualiza el estado de la lista de pacientes con la nueva lista filtrada sin el id que se queria eliminar
    setPacientes(nuevaLista);
  }

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            paciente={paciente}
            setPacientes={setPacientes}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            paciente={paciente}
            elimina={eliminarPaciente}
          />
        </div>
      </div>
    </>
  )
}

export default App
