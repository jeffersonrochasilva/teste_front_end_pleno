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

export const stepSaveItem = atom({
  key: "stepSaveItem",
  default: false,
});

export const stepTypeFilter = atom({
  key: "stepTypeFilter",
  default: 0,
});
