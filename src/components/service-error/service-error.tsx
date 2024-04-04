import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const ServiceErrorComponent = () => {
    return (
        <Paper sx={{ width: "60%", margin: "0 auto" }}>
            <ErrorOutlineIcon sx={{ fontSize: "120px" }} />
            <Box>
                <Typography variant="h3">
                    Service is unavaiable at this moment.
                </Typography>
                <Typography variant="h4">Please try again later.</Typography>
            </Box>
        </Paper>
    );
};
