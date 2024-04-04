import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ViewModeT } from "../components/topbar/view-toggle/view-toggle.models";

type ViewModeStore = {
    viewMode: ViewModeT;
    setViewMode: (newView: ViewModeT) => void;
};

export const useViewModeStore = create<ViewModeStore>()(
    devtools(
        (set) => ({
            viewMode: "list",
            setViewMode: (newView: ViewModeT) => {
                set(() => ({ viewMode: newView }));
            },
        }),
        {
            name: "data view store",
        },
    ),
);
