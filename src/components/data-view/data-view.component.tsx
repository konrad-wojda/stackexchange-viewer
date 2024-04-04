import React, { useEffect, useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

import { TableViewComponent } from "./table-view/table-view.component";
import { ListViewComponent } from "./list-view/list-view.component";
import { useViewModeStore } from "../../store/data-view.store";
import { getTagData, useTagStore } from "../../store/tag.store";
import {
    orderT,
    orderValues,
    sortValuesT,
    sortValues,
    elementsPerPageOptions,
} from "../../models/tag.model";
import { useErrorStore } from "../../store/error.store";

export const DataViewComponent = () => {
    const viewMode = useViewModeStore((state) => state.viewMode);
    const tagData = useTagStore((state) => state.data);
    const status = useTagStore((state) => state.status);

    const [page, setPage] = useState(1);
    const [elementsPerPage, setElementsPerPage] = useState(5);
    const [order, setOrder] = useState<orderT>(orderValues[1]);
    const [sort, setSort] = useState<sortValuesT["field"]>(sortValues[1].field);
    const setServiceError = useErrorStore((state) => state.setServiceError);

    const changePageHandler = (
        _e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
        page: number,
    ) => {
        setPage(page + 1);
    };

    const changeElementsPerPage = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setElementsPerPage(
            Number(
                event.target as HTMLInputElement | HTMLTextAreaElement,
            ).valueOf(),
        );
    };

    const changeSorting = (sort: sortValuesT["field"], order: orderT) => {
        setSort(sort);
        setOrder(order);
    };

    useEffect(() => {
        const updateTagData = async () => {
            await getTagData({ page, pageSize: elementsPerPage, order, sort });
        };

        updateTagData();
    }, [page, order, sort, elementsPerPage]);

    useEffect(() => {
        setServiceError(status === "error");
    }, [status]);

    return (
        <Paper sx={{ margin: "0 auto" }}>
            <Box>
                <TablePagination
                    rowsPerPageOptions={elementsPerPageOptions}
                    component={"div"}
                    count={-1}
                    rowsPerPage={elementsPerPage}
                    page={page - 1}
                    onPageChange={changePageHandler}
                    onRowsPerPageChange={changeElementsPerPage}
                    slotProps={{
                        actions: {
                            nextButton: {
                                disabled:
                                    !tagData[`${page}${order}${sort}`]
                                        ?.has_more,
                            },
                        },
                    }}
                />
            </Box>
            <Box>
                {viewMode == "table" ? (
                    <TableViewComponent
                        isLoading={!tagData[`${page}${order}${sort}`]?.items}
                        order={order}
                        sort={sort}
                        changeSorting={changeSorting}
                        data={tagData[`${page}${order}${sort}`]?.items}
                        childPerPage={10}
                    />
                ) : (
                    <ListViewComponent
                        isLoading={!tagData[`${page}${order}${sort}`]?.items}
                        order={order}
                        sort={sort}
                        changeSorting={changeSorting}
                        data={tagData[`${page}${order}${sort}`]?.items}
                        childPerPage={10}
                    />
                )}
            </Box>
        </Paper>
    );
};
