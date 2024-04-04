import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { ListSortingComponent } from "./list-sorting.component";
import { orderT, sortValuesT } from "../../../../models/tag.model";
import { ViewSortingProps } from "../../../../models/data-view.model";

const ListSortingWrapper: React.FC<Omit<ViewSortingProps, "changeSorting">> = (
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
        <ListSortingComponent
            {...props}
            changeSorting={changeSorting}
            sort={sort}
            order={order}
        />
    );
};

const meta = {
    title: "View/ListView/Sorting",
    component: ListSortingWrapper,
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
} satisfies Meta<typeof ListSortingWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListSorting: Story = {
    args: {
        order: "desc",
        sort: "popular",
    },
};
