import { Drawer, makeStyles, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const Menu = ({ variant, open, onClose }) => {

  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240
    },
    listPaper: {
      width: 240
    },
  }));

  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.paper
      }}
      anchor="left"
      variant={variant}
      open={open}
      onClose={onClose ? onClose : null}
    >
      <div>
        <Divider />
        <List component="nav" className={classes.listPaper}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

export default Menu