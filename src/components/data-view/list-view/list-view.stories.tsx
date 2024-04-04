import type { Meta, StoryObj } from "@storybook/react";

import { ListViewComponent } from "./list-view.component";
import { DataViewProps } from "../../../models/data-view.model";
import { useState } from "react";
import { orderT, sortValuesT } from "../../../models/tag.model";

const ListViewWrapper: React.FC<Omit<DataViewProps, "changeSorting">> = (
    props,
) => {
    const { order: _order, sort: _sort } = props;
    const [sort, setSort] = useState(_sort);
    const [order, setOrder] = useState(_order);

    const changeSorting = (sort: sortValuesT["field"], order: orderT) => {
        setSort(sort);
        setOrder(order);
    };
    return (
        <ListViewComponent
            {...props}
            changeSorting={changeSorting}
            sort={sort}
            order={order}
        />
    );
};

const meta = {
    title: "View/ListView",
    component: ListViewWrapper,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        order: {
            options: ["desc", "asc"],
            control: { type: "radio" },
        },
        sort: {
            options: ["popular", "name"],
            control: { type: "radio" },
        },
    },
} satisfies Meta<typeof ListViewComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListView: Story = {
    args: {
        data: [
            { name: "js", count: 352345 },
            { name: "c#", count: 52345 },
            { name: "c++", count: 5234 },
            { name: "python", count: 3123 },
            { name: "rubyonrails", count: 123 },
        ],
        order: "desc",
        sort: "popular",
        isLoading: false,
        childPerPage: 5,
    },
};
