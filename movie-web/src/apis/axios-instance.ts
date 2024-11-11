import axios from "axios";
import useAuthStore from "../store/useAuthStore.ts";

export const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

export function get<T>(...args: Parameters<typeof axiosInstance.get>) {
  return axiosInstance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof axiosInstance.post>) {
  return axiosInstance.post<T>(...args);
}

export const authInstance = axios.create({})

// Refresh Token을 사용하여 Access Token 갱신 함수
const refreshAccessToken = async () => {
  const refreshToken = useAuthStore.getState().refreshToken;
  try {
    const response = await axios.post(
      'http://localhost:3000/auth/token/access', // 토큰 갱신 엔드포인트 (예: '/auth/refresh')
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    const newAccessToken = response.data.accessToken;
    const newRefreshToken = response.data.refreshToken;
    // 새로 받은 토큰을 저장
    useAuthStore.getState().setTokens(newAccessToken, newRefreshToken);
    return newAccessToken;
  } catch (error) {
    // Refresh Token이 만료된 경우, 로그아웃 처리
    useAuthStore.getState().removeTokens();
    window.location.href = '/login';
    return null;
  }
};


authInstance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

// 응답 인터셉터 설정
authInstance.interceptors.response.use(
  (response) => response, // 성공적인 응답은 그대로 반환
  async (error) => {
    const originalRequest = error.config;

    // Access Token 만료 확인 및 갱신 시도
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshAccessToken();

      if (newAccessToken) {
        // 갱신된 Access Token으로 요청 헤더 업데이트
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return authInstance(originalRequest); // 갱신된 토큰으로 요청 재시도
      }
    }

    return Promise.reject(error);
  }
);
