import { getPosts } from '@/api/postApi';
import type { GetPostsParams, PostResponse } from '@/types/post';
import { useQuery } from '@tanstack/react-query';

export const usePosts = ({ title = '', page = 1 }: GetPostsParams) => {
  return useQuery<PostResponse>({
    queryKey: ['posts', title, page],
    queryFn: () => getPosts({ title, page }),
  });
};
