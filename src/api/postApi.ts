import axiosClient from "@/config/axiosClient";
import type {
  CreatePostRequest,
  CreatePostResponse,
  GetPostsParams,
  PostResponse,
  UpdatePostRequest,
  UpdatePostResponse,
} from "@/types/post";

export const getTags = async (): Promise<String[]> => {
  const res = await axiosClient.get<String[]>("/posts/tags");
  return res.data;
};

export const getPosts = async (
  params: GetPostsParams
): Promise<PostResponse> => {
  const res = await axiosClient.get<PostResponse>("/posts", {
    params,
  });
  return res.data;
};

export const deletePost = async (postId: string): Promise<void> => {
  await axiosClient.delete(`/posts/${postId}`);
};

export const createPost = async (
  payload: CreatePostRequest
): Promise<CreatePostResponse> => {
  const res = await axiosClient.post<CreatePostResponse>("/posts", payload);

  return res.data;
};


export const updatePost = async (payload: UpdatePostRequest): Promise<UpdatePostResponse> => {
  const response = await axiosClient.patch<UpdatePostResponse>(`/posts/${payload.id}`, { description: payload.description });
  return response.data;
};