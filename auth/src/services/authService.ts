import { LoginRequest } from '../types';

export const loginUser = async ({ username, password }: LoginRequest) => {
  try {
    const res = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) throw new Error('Login fallido');

    const data = await res.json();
    sessionStorage.setItem('token', data.token);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
