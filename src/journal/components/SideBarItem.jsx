import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';

export const SidebarItem = ({ title, body, id }) => {

    const newTitle = useMemo( () => {
      return title.lenght > 17
      ? title.susbstring(0,17) + '...'
      : title;
    }, [ title ]);

  return (
    <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={ newTitle } />
            <ListItemText secondary={ body } />
          </Grid>
        </ListItemButton>
    </ListItem>
  )
}
