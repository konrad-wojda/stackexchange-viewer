import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const themeDark = createTheme({
    palette: {
        background: {
            default: grey[800],
            paper: grey[700],
        },
        text: {
            primary: "#ffffff",
        },
    },
});
