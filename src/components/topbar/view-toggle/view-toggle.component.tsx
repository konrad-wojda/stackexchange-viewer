import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { MouseEvent } from "react";
import Box from "@mui/material/Box";

import { useViewModeStore } from "../../../store/data-view.store";

export const ViewToggleComponent = () => {
    const viewMode = useViewModeStore((state) => state.viewMode);
    const setViewMode = useViewModeStore((state) => state.setViewMode);

    const handleViewMode = (_e: MouseEvent<HTMLElement>, newView: any) => {
        if (newView === null) return;
        setViewMode(newView);
    };

    return (
        <Box>
            <ToggleButtonGroup
                value={viewMode}
                exclusive
                onChange={handleViewMode}
            >
                <ToggleButton value={"table"}>
                    <BorderAllIcon
                        sx={{ marginRight: "4px", fontSize: "20px" }}
                    />
                    Table
                </ToggleButton>

                <ToggleButton value={"list"}>
                    <FormatListBulletedIcon
                        sx={{ marginRight: "4px", fontSize: "18px" }}
                    />
                    List
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};
