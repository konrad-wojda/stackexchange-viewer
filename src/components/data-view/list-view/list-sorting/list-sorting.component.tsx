import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { ViewSortingProps } from "../../../../models/data-view.model";
import {
    orderT,
    orderValues,
    sortValues,
    sortValuesT,
} from "../../../../models/tag.model";

export const ListSortingComponent: React.FC<ViewSortingProps> = ({
    order,
    sort,
    changeSorting,
}) => {
    const handleSort = (event: SelectChangeEvent) => {
        const sortState = event.target.value as sortValuesT["field"];

        changeSorting(sortState, order);
    };

    const handleOrder = (event: SelectChangeEvent) => {
        const orderState = event.target.value as orderT;

        changeSorting(sort, orderState);
    };

    return (
        <Box sx={{ width: "fit-content" }}>
            <FormControl variant="standard" sx={{ m: 1, width: "200px" }}>
                <InputLabel id="sort-label">Sort By</InputLabel>
                <Select
                    labelId="sort-label"
                    id="sort-select"
                    value={sort}
                    onChange={(e) => handleSort(e)}
                    sx={{ textTransform: "capitalize" }}
                >
                    <MenuItem
                        value={sortValues[1].field}
                        sx={{ textTransform: "capitalize" }}
                    >
                        {sortValues[1].label}
                    </MenuItem>
                    <MenuItem
                        value={sortValues[0].field}
                        sx={{ textTransform: "capitalize" }}
                    >
                        {sortValues[0].label}
                    </MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, width: "200px" }}>
                <InputLabel id="order-label">Sort Order</InputLabel>
                <Select
                    labelId="order-label"
                    id="order-select"
                    value={order}
                    onChange={(e) => handleOrder(e)}
                    sx={{ textTransform: "capitalize" }}
                >
                    <MenuItem
                        value={orderValues[0]}
                        sx={{ textTransform: "capitalize" }}
                    >
                        {orderValues[0]}
                    </MenuItem>
                    <MenuItem
                        value={orderValues[1]}
                        sx={{ textTransform: "capitalize" }}
                    >
                        {orderValues[1]}
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
