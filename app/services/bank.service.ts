import { Bank } from "../types";
import { fetchAPI } from "../lib/api";

export const getAllBank = async (): Promise<Bank[]> => {
    return await fetchAPI<Bank[]>("/banks");
};