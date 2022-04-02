import { TextField, makeStyles } from '@material-ui/core'

const TextArea = ({ id, name, placeholder, texto }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes = useStyles();

    return (
        <TextField
            id={id}
            name={name}
            label={id}
            multiline
            rows={6}
            defaultValue={texto}
            placeholder={placeholder}
            variant="outlined"
        />
    )
}

export default TextArea