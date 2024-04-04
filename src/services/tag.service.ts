import axios, { AxiosError } from "axios";

import { TagOptions, TagResponse } from "../models/tag.model";

export class TagService {
    public static async getTags({ page, pageSize, order, sort }: TagOptions) {
        try {
            const response = await axios.get<TagResponse>(
                "https://api.stackexchange.com/2.3/tags",
                {
                    params: {
                        page,
                        pagesize: pageSize,
                        order,
                        sort,
                        site: "stackoverflow",
                    },
                },
            );

            return response.data;
        } catch (err: any) {
            console.error("getTags: " + err);

            return err as AxiosError;
        }
    }
}
