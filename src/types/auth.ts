export interface SigninRequest {
  username: string;
}

export interface SigninResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LogoutResponse {
  code: number;
}
