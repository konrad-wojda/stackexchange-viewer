import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import { DataViewProps } from "../../../models/data-view.model";
import { DataLoadingComponent } from "../data-loading/data-loading.component";
import { ViewSortingComponent } from "./table-sorting/table-sorting.component";

export const TableViewComponent: React.FC<DataViewProps> = ({
    data,
    order,
    sort,
    changeSorting,
    isLoading,
    childPerPage,
}) => {
    return (
        <>
            <ViewSortingComponent
                order={order}
                sort={sort}
                changeSorting={changeSorting}
            />
            <Table
                sx={{
                    border: "1px solid rgba(224, 224, 224, 1)",
                    tableLayout: "fixed",
                }}
                size="small"
            >
                <TableBody>
                    {isLoading ? (
                        <DataLoadingComponent childPerPage={childPerPage} />
                    ) : (
                        data.map(({ name, count }) => (
                            <TableRow
                                sx={{
                                    height: "50px",
                                }}
                                hover
                                key={`${name}${count}`}
                            >
                                <TableCell>{name}</TableCell>
                                <TableCell>{count}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </>
    );
};
