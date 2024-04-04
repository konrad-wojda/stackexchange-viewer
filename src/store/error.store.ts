import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ErrorStore = {
    isServiceError: boolean;
    setServiceError: (isServiceError: boolean) => void;
};

export const useErrorStore = create<ErrorStore>()(
    devtools(
        (set) => ({
            isServiceError: false,
            setServiceError: (isStillServiceError) => {
                set(() => ({ isServiceError: isStillServiceError }));
            },
        }),
        { name: "error state" },
    ),
);
