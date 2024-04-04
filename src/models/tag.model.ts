export interface TagResponse {
    items: TagData[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}

export interface TagData {
    collectives?: any[];
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    count: number;
    name: string;
}

export interface TagOptions {
    page: number;
    pageSize: number;
    order: orderT;
    sort: sortValuesT["field"];
}

export const orderValues = ["asc", "desc"] as const;
export type orderT = (typeof orderValues)[number];

export const sortValues = [
    { field: "popular", label: "count" },
    { field: "name", label: "name" },
] as const;
export type sortValuesT = (typeof sortValues)[number];

export const elementsPerPageOptions = [5, 10, 25] as const;
