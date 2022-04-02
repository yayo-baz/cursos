import { Typography, Toolbar, AppBar, makeStyles, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = ({ handleOpen }) => {

    const useStyles = makeStyles((theme) => ({
        menuButton: {
            marginRight: theme.spacing(2),

        },
        title: {
            flexGrow: 1,
        },

    }));

    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                    onClick={handleOpen}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Pruebas Yael
                </Typography>
                <Button variant="contained" color="secondary" >
                    Iniciar Sesion
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar