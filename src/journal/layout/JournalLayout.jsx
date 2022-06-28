import { Box } from '@mui/material'

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>
        {/* Navbar drawerWidth*/}
        {/* Sidebar drawerWidth*/}
        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            {/* Toolbar */}

            { children }
        </Box>
    </Box>
  )
}
