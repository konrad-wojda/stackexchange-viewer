import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CircularProgress from "@mui/material/CircularProgress";

export const DataLoadingComponent: React.FC<{ childPerPage: number }> = ({
    childPerPage,
}) => {
    return (
        <TableRow sx={{ height: 50 * childPerPage }}>
            <TableCell align="center" colSpan={2}>
                <CircularProgress />
            </TableCell>
        </TableRow>
    );
};
