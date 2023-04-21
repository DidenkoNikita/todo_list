import localforage from "localforage";

export const logout = (): void => {
  localforage.clear();
};