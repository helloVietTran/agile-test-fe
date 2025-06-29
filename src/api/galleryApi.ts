import axiosClient from "@/config/axiosClient";
import type { Gallery } from "@/types/gallery";

export const getGalleries = async (): Promise<Gallery[]> => {
  const res = await axiosClient.get<Gallery[]>("/galleries");
  return res.data;
};
