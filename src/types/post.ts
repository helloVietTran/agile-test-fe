export interface Post {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PostResponse {
  posts: Post[];
  current_page: number;
  total_page: number;
  page_size: number;
  total: number;
}

export interface GetPostsParams {
  title?: string;
  page?: number;
}


export interface CreatePostRequest {
  title: string;
  description: string;
  tags: string[];
}

export interface CreatePostResponse{
  code: number

}

export interface UpdatePostRequest {
  id: string;
  description: string;
}

export interface UpdatePostResponse {
  code: number
}