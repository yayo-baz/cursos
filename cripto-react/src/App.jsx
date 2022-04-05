import React from 'react'
import { Typography, makeStyles, Grid } from '@material-ui/core';
import CriptoForm from './components/CriptoForm';
import './index.css'

function App() {

  const useStyle = makeStyles((theme) => ({
    title: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      margin: '25px'
    }
  }));

  const classes = useStyle();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.title}>
            Cotiza Criptomonedas al instante
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <CriptoForm />
        </Grid>
        <Grid item xs={6}>

        </Grid>
      </Grid>
    </>
  )
}

export default App
