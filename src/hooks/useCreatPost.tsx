import { createPost } from '@/api/postApi';
import type { CreatePostRequest, CreatePostResponse } from '@/types/post';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation<CreatePostResponse, Error, CreatePostRequest>({
    mutationFn: createPost,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Đăng bài thành công!');
    },
    onError: (err: any) => {
      console.log(err);
      toast.error('Đăng bài thất bại!');
    },
  });
};
