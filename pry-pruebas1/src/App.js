import React from "react";
import { useState, useEffect } from "react";
import TextArea from "./components/TextArea";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const [variables, setVariables] = useState({ texto: '' })
  const [observacion, setObservacion] = useState("");

  useEffect(() => {
    setObservacion("Descubre la l Laptop Lenovo Ideapad 3 y aprovecha los descuento durante el Intel Week.")
    setVariables({ texto: "Frida, la perrita rescatista más famosa de México, está grave de salud" })
  }, [])


  const { texto } = variables

  const onChange = (e) => {
    setVariables({
      ...variables,
      [e.target.name]: e.target.value
    })
  }

  const onChangeObserva2 = e => {
    let expNopermitida = new RegExp('[{}|`]');
    let expMenos = new RegExp("'");
    let expMas = new RegExp('"');
    let expCadena = new RegExp('[A-Za-z0-9*%$@#_&-+()/.:;!?,<>=]');

    if ((expCadena.test(e.target.value) && !expNopermitida.test(e.target.value) &&
      !expMenos.test(e.target.value) && !expMas.test(e.target.value)) || e.target.value === ' ' || e.target.value === '') {
      setObservacion(e.target.value)

    }
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', textAlign: 'center', paddingTop: '2rem' }} >
          <TextArea
            id="Observacion-1"
            placeholder="Observación"
            onChange={onChangeObserva2}
            texto={observacion} />
          <br />
          <TextArea
            id="Observacion-2"
            placeholder="Ejemplo texto"
            onChange={onChange}
            texto={texto}
          />

        </Box>
      </Container>
    </div >
  );
}

export default App;
