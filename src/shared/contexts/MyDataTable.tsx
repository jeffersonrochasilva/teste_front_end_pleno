import React, { createContext, useContext, useState } from "react";

interface IMyDataTable {
  nome: string;
}

export const MyDataTableContext = createContext({} as IMyDataTable);

export const useMyDataTable = () => {
  return useContext(MyDataTableContext);
};

export const MyDataTableProvider: React.FC = ({ children }) => {
  const [nome] = useState("Jefferson");

  return (
    <MyDataTableContext.Provider value={{ nome }}>
      {children}
    </MyDataTableContext.Provider>
  );
};
