import Box from "@mui/material/Box";
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";
import { ViewToggleComponent } from "./view-toggle/view-toggle.component";

export const TopbarComponent = () => {
    return (
        <>
            <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
                <ThemeToggleComponent />
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
                <ViewToggleComponent />
            </Box>
        </>
    );
};
