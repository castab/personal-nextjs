import { Dispatch, SetStateAction, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { Collapse, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { ExpandLess, ExpandMore, GitHub } from '@material-ui/icons'

function DrawerContents() {

  const [currentProjectsExpand, setCurrentProjectsExpand] = useState(false)
  const [pastProjectsExpand, setPastProjectsExpand] = useState(false)

  return (
    <div style={{width: 250}}>
      <List>
        <ListItem button onClick={() => setCurrentProjectsExpand(!currentProjectsExpand)}>
          <ListItemText primary="Current Projects" />
          { currentProjectsExpand ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>
        <Collapse
         in={currentProjectsExpand}
         timeout="auto"
         unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Some Item" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => setPastProjectsExpand(!pastProjectsExpand)}>
          <ListItemText primary="Past Projects" />
          { pastProjectsExpand ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>
        <Collapse
         in={pastProjectsExpand}
         timeout="auto"
         unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Some Item" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GitHub />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  )
}

export default function Navbar() {

  const [state, setState] = useState(false)
  
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {return}

    setState(open);
  };

  return (
    <AppBar position="static" style={{backgroundColor: "#f8f9fa"}}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" style={{color: "black"}}>
              Brayan J. Castaneda
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
             onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
      <Drawer
       anchor="right"
       open={state}
       onClose={toggleDrawer(false)}
      >
        <DrawerContents />
      </Drawer>
    </AppBar>
  )
}