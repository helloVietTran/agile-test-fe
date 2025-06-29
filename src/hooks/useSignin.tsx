import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { signin } from '@/api/authApi';
import type { SigninRequest, SigninResponse } from '@/types/auth';
import { tokenStorage } from '@/utils/tokenStorage';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';


export const useSignin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation<SigninResponse, Error, SigninRequest>({
    mutationFn: signin,
    onSuccess: (data) => {
      tokenStorage.setTokens(data.accessToken, data.refreshToken);
      login();
      navigate("/");
      toast.success('Đăng nhập thành công!');
    },
    onError: (err: any) => {
        console.log(err);
      toast.error('Đăng nhập thất bại!');
    },
  });
};
