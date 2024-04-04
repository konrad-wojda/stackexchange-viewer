import { useEffect } from "react";

import { MaterialUISwitch } from "./theme-toggle.style";
import { useThemeStore } from "../../../store/theme.store";

export const ThemeToggleComponent = () => {
    const toggleLightMode = useThemeStore((state) => state.toggleLightMode);
    const lightMode = useThemeStore((state) => state.lightMode);

    useEffect(() => {
        localStorage.setItem("lightTheme", JSON.stringify(lightMode));
    }, [lightMode]);

    return (
        <MaterialUISwitch
            sx={{ m: 1 }}
            checked={!lightMode}
            onChange={toggleLightMode}
        />
    );
};
