import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

export const themeLight = createTheme({
    palette: {
        background: {
            default: indigo[100],
            paper: indigo[50],
        },
        text: {
            primary: "#000000",
        },
    },
});
