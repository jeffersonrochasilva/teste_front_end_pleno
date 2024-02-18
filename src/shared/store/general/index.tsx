import { atom } from "recoil";

export const snackbarStore = atom({
  key: "atomStore",
  default: {
    value: false,
    message: "hello word",
    vertical: "top",
    horizontal: "center",
  },
});
