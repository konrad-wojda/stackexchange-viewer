import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from "@mui/material/CircularProgress";

import { DataViewProps } from "../../../models/data-view.model";
import { ListSortingComponent } from "./list-sorting/list-sorting.component";

export const ListViewComponent: React.FC<DataViewProps> = ({
    data,
    order,
    sort,
    changeSorting,
    isLoading,
}) => {
    return (
        <>
            <ListSortingComponent
                order={order}
                sort={sort}
                changeSorting={changeSorting}
            />
            {isLoading ? (
                <CircularProgress />
            ) : (
                <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                    {data.map((el) => (
                        <ListItem disablePadding key={el.name}>
                            <ListItemButton>
                                <ListItemText
                                    primary={el.name}
                                    secondary={el.count}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            )}
        </>
    );
};
