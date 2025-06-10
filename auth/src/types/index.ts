export interface LoginRequest {
  username: string;
  password: string;
}
export interface AuthResponse {
  token: string;
}
export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'user';
}
