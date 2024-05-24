import { create } from "zustand";
import { getJWT, setJWT, removeJWT, getMe } from "../api/api-utils";
import { endpoints } from "../api/config";

export const useStore = create((set) => ({
  isAuth: false,
  user: null,
  token: null,
  login: (user, token) => {
    /* С помощью функции set устанавливаем новое состояние хранилища */
    set({ isAuth: true, user, token });
    /* Записываем полученный токен */
    setJWT(token);
  },
  logout: () => {
    /* Возвращаем изначальные состояния */
    set({ isAuth: false, user: null, token: null });
    /* Удаляем токен */
    removeJWT();
  },
  checkAuth: async () => {
    const jwt = getJWT();
    if (jwt) {
      const user = await getMe(endpoints.me, jwt);
      if (user) {
        /* Сохраняем полученные данные и токен */
        set({ isAuth: true, user: { ...user, id: user._id }, token: jwt });
        setJWT(jwt);
      } else {
        /* Возвращаем изначальные состояния и удаляем токен */
        set({ isAuth: false, user: null, token: null });
        removeJWT();
      }
    } else {
      set({ isAuth: false, user: null, token: null });
    }
  },
}));
