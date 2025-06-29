import axios from 'axios';
import { tokenStorage } from '@/utils/tokenStorage';
import type {
  LogoutResponse,
  SigninRequest,
  SigninResponse,
} from '@/types/auth';
import axiosClient from '@/config/axiosClient';
import { BASE_URL } from '@/config/constants';

export const refreshToken = async () => {
  const refreshToken = tokenStorage.getRefreshToken();
  if (!refreshToken) throw new Error('No refresh token');

  const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
    refreshToken,
  });

  const { accessToken, refreshToken: newRefreshToken } = response.data;
  tokenStorage.setTokens(accessToken, newRefreshToken);
  return accessToken;
};

export const signin = async (
  payload: SigninRequest
): Promise<SigninResponse> => {
  const res = await axiosClient.post<SigninResponse>('/auth/login', payload);
  return res.data;
};

export const logout = async (): Promise<LogoutResponse> => {
  const res = await axiosClient.delete<LogoutResponse>('/auth/logout');
  return res.data;
};
