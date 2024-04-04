import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";

import { ViewSortingProps } from "../../../../models/data-view.model";
import { orderT, sortValues, sortValuesT } from "../../../../models/tag.model";

export const ViewSortingComponent: React.FC<ViewSortingProps> = ({
    order,
    sort,
    changeSorting,
}) => {
    const handleSort = (name: sortValuesT) => {
        let newOrder: orderT = "desc";
        if (sort === name.field) {
            if (order === "desc") newOrder = "asc";
        }

        changeSorting(name.field, newOrder);
    };

    return (
        <Table sx={{ width: "100%" }}>
            <TableHead>
                <TableRow sx={{ height: "50px" }}>
                    <TableCell>
                        <TableSortLabel
                            active={sort === "name"}
                            direction={sort === "name" ? order : "desc"}
                            onClick={() => {
                                handleSort(sortValues[1]);
                            }}
                        >
                            Name
                        </TableSortLabel>
                    </TableCell>
                    <TableCell>
                        <TableSortLabel
                            active={sort === "popular"}
                            direction={sort === "popular" ? order : "desc"}
                            onClick={() => {
                                handleSort(sortValues[0]);
                            }}
                        >
                            Count
                        </TableSortLabel>
                    </TableCell>
                </TableRow>
            </TableHead>
        </Table>
    );
};
