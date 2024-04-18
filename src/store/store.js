import React from "react";
import { useStore } from "zustand";
import { create } from "zustand";
// Создаем хранилище состояния с помощью Zustand
const usePrice = create((set) => ({
  loginInfo: { login: "", password: "" },
  data: 1,
  setLoginInfo: () =>
    set((state) => {
      console.log(state);
      return {
        loginInfo: state.loginInfo,
      };
    }),
  setData: () =>
    set((state) => ({
      data: "213",
    })),
}));

export { usePrice };
