import React from "react";
import { useState, useEffect } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { makeStyles } from '@material-ui/core'

function App() {

  const [variables, setVariables] = useState({ texto: '' })
  const [observacion, setObservacion] = useState("");

  useEffect(() => {
    setObservacion("Descubre la l Laptop Lenovo Ideapad 3 y aprovecha los descuento durante el Intel Week.")
    setVariables({ texto: "Frida, la perrita rescatista más famosa de México, está grave de salud" })
  }, [])


  const { texto } = variables

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

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    tooolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(10),
      alignItems: 'center',
      justifyContent: 'center'
    },
  }));

  const classes = useStyles();


  const [abrir, setAbrir] = useState(false);

  const handleOpen = () => {
    setAbrir(!abrir);
  };

  const handleChange = (e) => {
    setVariables({
      ...variables,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={classes.root}>
      <Navbar handleOpen={handleOpen} />
      <Menu
        variant="temporary"
        open={abrir}
        onClose={handleOpen}
      />
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <Content handleChange={handleChange}
          observacion={observacion}
          variables={variables}
          setVariables={setVariables}
          setObservacion={setObservacion}
          onChangeObserva2={onChangeObserva2}
        />
      </div>
    </div >
  );
}

export default App;
