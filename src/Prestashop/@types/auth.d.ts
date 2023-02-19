interface AuthResponse {
  success?: boolean;
  message?: string;
  accessToken?: string;
  refreshToken?: string;
  errors?: { email?: string; password?: string };
}
