import { requestLogout } from "./requestLogout";

export const logout = () => {
  localStorage.clear();
  window.location.assign('/');
  requestLogout();
}