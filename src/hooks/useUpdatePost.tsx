import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { updatePost } from '@/api/postApi';
import type { UpdatePostRequest, UpdatePostResponse } from '@/types/post';

const useUpdatePost = () => {
    const queryClient = useQueryClient();

    return useMutation<UpdatePostResponse, Error, UpdatePostRequest>({
        mutationFn: updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            toast.success('Cập nhật thành công!');
        },
        onError: (err: any) => {
            console.log(err);
            toast.error('Cập nhật thất bại!');
        },
    });
};
export default useUpdatePost;
