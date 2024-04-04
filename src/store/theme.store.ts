import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ThemeStore = {
    lightMode: boolean;
    toggleLightMode: () => void;
};

const lightMode = JSON.parse(localStorage.getItem("lightTheme") || "true");

export const useThemeStore = create<ThemeStore>()(
    devtools(
        (set) => ({
            lightMode: lightMode,
            toggleLightMode: () => {
                set((state) => ({ lightMode: !state.lightMode }));
            },
        }),
        { name: "light mode state" },
    ),
);
