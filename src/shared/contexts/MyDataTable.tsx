import React, { createContext, useContext, useState } from "react";

interface IMyDataTable {
  nome: string;
}

export const MyDataTableContext = createContext({} as IMyDataTable);

// eslint-disable-next-line react-refresh/only-export-components
export const useMyDataTable = () => {
  return useContext(MyDataTableContext);
};

export const MyDataTableProvider = ({ children }) => {
  const [nome] = useState("Jefferson");

  return (
    <MyDataTableContext.Provider value={{ nome }}>
      {children}
    </MyDataTableContext.Provider>
  );
};
