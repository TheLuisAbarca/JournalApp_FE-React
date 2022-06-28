import { Box, Divider, 
          Drawer, ListItem,
          ListItemButton, 
          ListItemIcon, 
          ListItemText, 
          Toolbar, Typography, 
          List, Grid } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent' // temporary
        open
        sx={{ 
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
        }}
      >
        <Toolbar>
          <Typography 
            variant='h6'
            noWrap
            component='div'
          >
            Luis Abarca
            </Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['January','February','March','April','May'].map( text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ 'Ea do eu labore ad aliqua Lorem.'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
