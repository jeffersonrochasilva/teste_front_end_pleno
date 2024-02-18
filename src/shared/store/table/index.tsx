import { atom } from "recoil";

export const tableStore = atom({
  key: "tableStore",
  default: [
    { category: "Categoria1", value: "12,32", date: "30/01/2024", id: 1 },
    { category: "Categoria2", value: "13,32", date: "30/01/2024", id: 2 },
    { category: "Categoria3", value: "12,32", date: "30/01/2024", id: 3 },
    { category: "Categoria3", value: "12,32", date: "30/01/2024", id: 4 },
  ],
});

export const lineTableStore = atom({
  key: "lineTableStore",
  default: [{ category: "", value: "", date: "", id: 0 }],
});

export const dataHeaderStore = atom({
  key: "dataHeaderStore",
  default: ["Categoria", "Valor", "Data", "Ações"],
});
