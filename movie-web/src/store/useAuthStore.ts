import { create } from "zustand";

type Store = {
  accessToken: string | null;
  refreshToken: string | null;

  setTokens: (accessToken: string, refreshToken: string) => void;
  setAccessToken: (newAccessToken: string) => void;
  removeTokens: () => void;
}

const useAuthStore = create<Store>((set) => ({
    accessToken: null,
    refreshToken: null,

    setTokens: (accessToken: string, refreshToken: string) => {
      set({
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
      localStorage.setItem('accessToken', accessToken);
    },

    setAccessToken: (newAccessToken: string) => {
      set({ accessToken: newAccessToken });
      localStorage.setItem('accessToken', newAccessToken);
    },

    removeTokens: () => {
      set({
        accessToken: null,
        refreshToken: null,
      });
      localStorage.removeItem('accessToken');
    },
  }
));

export default useAuthStore;
