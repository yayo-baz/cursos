import TextField from '@mui/material/TextField';

const TextArea = ({ id, name, placeholder, texto }) => {

    return (
        <div>
            <div>
                <TextField
                    id={id}
                    name={name}
                    label={id}
                    defaultValue={texto}
                    placeholder={placeholder}
                    multiline
                    rows={6}
                />
            </div>
        </div>
    )
}

export default TextArea