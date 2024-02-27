import { Box } from "@mui/material";
import { ContentText, MyTable, MyForm } from "../../shared/components";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { lineTableStoreObj } from "../../shared/store/table";
import { stepSaveItem } from "../../shared/store/general";
import { useSetRecoilState } from "recoil";
import { stepTypeFilter } from "../../shared/store/general";
import axios from "axios";
interface Item {
  category: string;
  value: string;
  date: string;
  id: number;
}

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [dataSecundary, setDataSecundary] = useState([]);
  const [lineTable, setLineTable] = useRecoilState(lineTableStoreObj);
  const [stepFitler, setStepFilter] = useRecoilState(stepTypeFilter);
  const setStepSave = useSetRecoilState(stepSaveItem);

  const getApiFunction = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching ports:", error);
    }
  };

  const edititemInTable = async (item: Item) => {
    console.log("item recebido", item);
    try {
      const response = await axios.put(
        `http://localhost:3000/posts/${item.id}`,
        item
      );
      console.log("deu certo", response);
      getApiFunction();
    } catch (err: unknown) {
      console.log("ERROR", err);
    }
  };

  const getItemInTebla = (item: Item) => {
    console.log("item capturado da tabela", item);
    setLineTable({
      category: item.category,
      value: item.value,
      date: item.date,
      id: item.id,
    });
    console.log("store", lineTable);
    setStepSave(true);
  };

  const filterForCategory = (item: strin) => {
    const res = data.filter((params: Item) => params.category === item);
    setData(res);
  };
  const filterForValue = (item: string) => {
    const res = data.filter((params: Item) => params.value === item);
    setData(res);
  };
  const filterForDate = (item: string) => {
    const res = data.filter((params: Item) => params.date === item);
    setData(res);
  };

  const filterItemInTable = (item: string) => {
    console.log("chamoou", item, stepFitler);
    if (stepFitler == 1) {
      filterForCategory(item);
      return setStepFilter(0);
    } else if (stepFitler == 2) {
      filterForValue(item);
      return setStepFilter(0);
    } else if (stepFitler == 3) {
      filterForDate(item);
      return setStepFilter(0);
    }
  };

  useEffect(() => {
    getApiFunction();
    setStepSave(false);
  }, []);

  return (
    <Box padding={5}>
      <ContentText />
      <MyForm
        getApiFunction={getApiFunction}
        data={data}
        edititemInTable={edititemInTable}
        filterItemInTable={filterItemInTable}
      />
      <MyTable
        data={data}
        getItemInTebla={getItemInTebla}
        getApiFunction={getApiFunction}
        edititemInTable={edititemInTable}
      />
    </Box>
  );
};
