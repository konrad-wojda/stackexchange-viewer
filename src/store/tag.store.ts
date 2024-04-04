import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";

import { ResponseStatus } from "../models/response-status.model";
import {
    TagData as TagData,
    TagOptions as TagOptions,
} from "../models/tag.model";
import { TagService as TagService } from "../services/tag.service";

interface TagDict {
    [Key: string]: TagStoreData;
}

interface TagStoreData {
    items: TagData[];
    has_more: boolean;
}

type TagStore = {
    status: ResponseStatus;
    data: TagDict;
    setStatus: (status: ResponseStatus) => void;
    setData: (tagData: TagStoreData, key: string) => void;
};

export const useTagStore = create<TagStore>()(
    devtools(
        (set) => ({
            status: "success",
            data: {},
            setStatus: (newStatus) => set(() => ({ status: newStatus })),
            setData: (tagData, key) => {
                set((state) => {
                    const newData = { ...state.data };
                    newData[key] = tagData;

                    return { data: newData };
                });
            },
        }),
        {
            name: "tag store",
        },
    ),
);

export const getTagData = async (options: TagOptions) => {
    const setStatus = useTagStore.getState().setStatus;
    setStatus("pending");
    const { page, order, sort } = options;

    const response = await TagService.getTags(options);

    if (axios.isAxiosError(response)) {
        setStatus("error");

        return response;
    }

    const setData = useTagStore.getState().setData;
    setData(
        { items: response.items, has_more: response.has_more },
        `${page}${order}${sort}`,
    );
    setStatus("success");
};
