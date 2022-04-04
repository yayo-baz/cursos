import TextArea from '../components/TextArea'
import { Grid, TextField } from '@material-ui/core'

const Content = ({ onChangeObserva2, observacion, onChange, texto }) => {

    return (
        <Grid container spacing={5}>
            <Grid item xs={3}>
                <TextArea
                    id="Observacion-1"
                    placeholder="Observación"
                    onChange={onChangeObserva2}
                    texto={observacion} />
            </Grid>
            <Grid item xs={3}>
                <TextArea
                    id="Observacion-2"
                    placeholder="Ejemplo texto"
                    onChange={onChange}
                    texto={texto}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField id="outlined-basic" label="Input 1" variant="outlined" />
            </Grid>
            <Grid item xs={3}>
                <TextField id="outlined-basic" label="Input 2" variant="outlined" />
            </Grid>
        </Grid>
    )
}

export default Content