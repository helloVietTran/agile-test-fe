import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import type { LogoutResponse } from '@/types/auth';
import { tokenStorage } from '@/utils/tokenStorage';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/api/authApi';


export const useLogout = () => {
    const { logout : logoutAction } = useAuth();
    const navigate = useNavigate();

    return useMutation<LogoutResponse, Error>({
        mutationFn: logout,
        onSuccess: () => {
            tokenStorage.clear();
            logoutAction();
            navigate("/");
            toast.success('Đăng xuất thành công!');
        },
    });
};
