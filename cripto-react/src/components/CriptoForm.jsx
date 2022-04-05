import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, MenuItem, Button, Typography } from '@material-ui/core';

const CriptoForm = () => {

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
            },
        },
        label: {
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            margin: '25px'
        }
    }));

    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <Typography variant="h5" className={classes.label}>
                    Cotiza Criptomonedas al instante
                </Typography>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography variant="h5" className={classes.label}>
                    Cotiza Criptomonedas al instante
                </Typography>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant="contained" color="primary">
                    Calcular
                </Button>
            </div>
        </form>
    )
}

export default CriptoForm