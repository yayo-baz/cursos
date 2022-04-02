import { useState } from 'react'
import './App.css'
import { Typography, makeStyles } from '@material-ui/core';

function App() {

  const useStyle = makeStyles({
    title: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
    }
  });

  const classes = useStyle();

  return (
    <div>
      <Typography variant="h1" className={classes.title} paragraph>
        Cotiza Criptomonedas al instante
      </Typography>
    </div>
  )
}

export default App
