import { Meta, StoryObj } from "@storybook/react";

import { ViewToggleComponent } from "./view-toggle.component";
import { ViewModeT } from "./view-toggle.models";

const meta = {
    title: "Toggles/ViewToggle",
    component: ViewToggleComponent,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        tableView: {
            options: ["table", "list"],
            control: { type: "radio" },
        },
    },
} satisfies Meta<typeof ViewToggleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

let dataView: ViewModeT = "table";

export const ViewToggle: Story = {
    args: {
        setViewToggle: (newView: ViewModeT) => {
            dataView = newView;
        },
        tableView: dataView,
    },
};
