interface DataTableItem {
  category: string;
  value: string;
  date: string;
  id: number;
}

interface MyTablecontext {
  myTableContext: DataTableItem[];
  dataTable: DataTableItem[];
  secundDataTable: DataTableItem[];
}

const myTableContext: MyTablecontext = {
  dataTable: [
    { category: "Categoria1", value: "12,32", date: "30/01/2024", id: 1 },
    { category: "Categoria2", value: "13,32", date: "30/01/2024", id: 2 },
    { category: "Categoria3", value: "12,32", date: "30/01/2024", id: 3 },
  ],
  secundDataTable: [{ category: "teste", value: "", date: "", id: 0 }],
  myTableContext: [],
};

const setMyDataTable = (item: DataTableItem[]) => {
  myTableContext.secundDataTable = item;
  const obj = {
    category: myTableContext.secundDataTable.category,
    value: myTableContext.secundDataTable.value,
    date: myTableContext.secundDataTable.date,
    id: myTableContext.dataTable.length + 1,
  };
  myTableContext.dataTable.push(obj);
  console.log(
    "este é o que está chegando no contexto",
    myTableContext.dataTable
  );
};

export { myTableContext, setMyDataTable };
