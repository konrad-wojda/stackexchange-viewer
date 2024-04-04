import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import "./App.css";
import { themeLight } from "./themes/theme-light";
import { themeDark } from "./themes/theme-dark";
import { useThemeStore } from "./store/theme.store";
import { useErrorStore } from "./store/error.store";
import { TopbarComponent } from "./components/topbar/topbar.component";
import { DataViewComponent } from "./components/data-view/data-view.component";
import { ServiceErrorComponent } from "./components/service-error/service-error";

const App = () => {
    const lightMode = useThemeStore((state) => state.lightMode);
    const showError = useErrorStore((state) => state.isServiceError);

    if (showError) return <ServiceErrorComponent />;

    return (
        <ThemeProvider theme={lightMode ? themeLight : themeDark}>
            <CssBaseline />
            <TopbarComponent />
            <DataViewComponent />
        </ThemeProvider>
    );
};

export default App;
