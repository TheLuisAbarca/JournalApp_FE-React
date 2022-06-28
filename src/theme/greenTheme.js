import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";


export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#696D7D'
        },
        secondary: {
            main: '#6F9283'
        },
        error: {
            main: green.A400
        }
    }
});
