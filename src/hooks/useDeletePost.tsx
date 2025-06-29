import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '@/api/postApi';
import { toast } from 'react-toastify';

export const useDeletePost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (postId: string) => deletePost(postId),
        onSuccess: () => {
            toast.success('Xóa bài viết thành công!');
            queryClient.invalidateQueries({
                queryKey: ['posts'],
            });
        },
        onError: (err: any) => {
            console.log(err);
            toast.error('Xóa thất bại. Vui lòng thử lại!');
        },
    });
};
