import { api } from "../lib/axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number;
  email: string;
}

interface RegisterUser extends Omit<User, "id"> {
  password: string;
}

interface AuthUserData {
  isAuth: boolean;
  token: string;
  refresh: string;
  handleRegisterUser(fields: RegisterUser): void;
  handleLoginUser(fields: RegisterUser): void;
  handleLogoutUser(refreshToken: string): void;
}

interface UserResult {
  user?: User;
  access: string;
  refresh?: string;
}

export const useAuthUser = create<AuthUserData>()(
  persist(
    (set) => ({
      token: "",
      refresh: "",
      isAuth: false,
      async handleLoginUser({ email, password }) {
        try {
          const { data } = await api.post<UserResult>("/login/", {
            email,
            password,
          });
          const { access, refresh } = data;

          set({
            isAuth: true,
            token: access,
            refresh,
          });

          localStorage.setItem("token", access);
          return data;
        } catch (error) {
          throw new Error(error as string);
        }
      },
      async handleRegisterUser({ email, password }) {
        try {
          const { data } = await api.post<UserResult>("/singup/", {
            email,
            password,
          });
          const { access, refresh } = data;

          set({
            isAuth: true,
            token: access,
            refresh,
          });

          return data;
        } catch (error) {
          console.log(error);
        }
      },

      async handleLogoutUser(refreshToken) {
        try {
          const { data } = await api.post<UserResult>("/logout/", {
            refresh: refreshToken,
          });

          set({
            refresh: "",
            token: "",
            isAuth: false,
          });

          return data;
        } catch (error) {
          return error;
        }
      },
    }),
    {
      //It will save our token on localStorege
      name: "access",
      partialize(state) {
        return {
          token: state.token,
          refresh: state.refresh,
        };
      },
    },
  ),
);
