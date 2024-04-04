import { Meta, StoryObj } from "@storybook/react";

import { ThemeToggleComponent } from "./theme-toggle.component";

const meta = {
    title: "Toggles/ThemeToggle",
    component: ThemeToggleComponent,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ThemeToggleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeToggle: Story = {
    args: {
        setLight: () => {},
    },
};
