import { sortValuesT, orderT } from "./tag.model";

export interface ViewSortingProps {
    changeSorting: (sort: sortValuesT["field"], order: orderT) => void;
    sort: sortValuesT["field"];
    order: orderT;
}

export interface DataViewProps extends ViewSortingProps {
    data: TagTableData[];
    isLoading: boolean;
    childPerPage: number;
}

export interface TagTableData {
    name: string;
    count: number;
}
