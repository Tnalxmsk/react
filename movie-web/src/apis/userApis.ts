import { authInstance, axiosInstance } from "./axios-instance.ts";
import useAuthStore from "../store/useAuthStore.ts";

export const signUp = async (email: string, password: string, passwordCheck: string) => {
  try {
    const url = 'http://localhost:3000/auth/register';
    const res = await axiosInstance.post(url, {
      email: email.toString(),
      password: password.toString(),
      passwordCheck: passwordCheck.toString(),
    });
    return res;
  } catch ( error ) {
    console.error("Failed to sign up:", error);
    return undefined;
  }
};

interface SignInResponse {
  refreshToken: string;
  accessToken: string;
}

export const signIn = async (email: string, password: string) => {
  try {
    const url = 'http://localhost:3000/auth/login';
    const res = await axiosInstance.post<SignInResponse>(url, {
      email: email.toString(),
      password: password.toString(),
    });
    console.log(res)
    useAuthStore.getState().setAccessToken(res.data.accessToken);
    return res;
  } catch ( error ) {
    console.error("Failed to sign in:", error);
    return undefined;
  }
};

interface UserInfoResponse {
  id: string;
  email: string;
}

export const getUserInfo = async () => {
  try {
    const url = 'http://localhost:3000/user/me';
    const res = await authInstance.get<UserInfoResponse>(url);
    console.log(res)
    return res;
  } catch ( error ) {
    console.error("Failed to get user info:", error);
    return undefined;
  }
}
