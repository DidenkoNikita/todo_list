import { asyncLogout } from "../store/asyncActions/asyncLogout";

export const logout = (): void => {
  localStorage.clear();
  window.location.assign('/');
  asyncLogout();
};