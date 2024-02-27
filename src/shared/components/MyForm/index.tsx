import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
// recoil
import { useRecoilState } from "recoil";
import { snackbarStore } from "../../store/general";
import { ButtonComponent } from "../commom/ButtonComponent";
import { lineTableStoreObj } from "../../store/table";
import { stepSaveItem } from "../../store/general";
import { useSetRecoilState } from "recoil";
import { stepTypeFilter } from "../../store/general";

export const MyForm = (props: any) => {
  const [valor, setValor] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [get, setGet] = useState<string>("");
  const [loadingFormButton] = useState<boolean>(false);
  const setSnackbar = useSetRecoilState(snackbarStore);
  const [lineTable] = useRecoilState(lineTableStoreObj);
  const [stepSave, setStepSave] = useRecoilState(stepSaveItem);
  const [stepFilter, setStepFilter] = useRecoilState(stepTypeFilter);
  const [value, setValue] = useState("");
  const [filterItem, setFilterItem] = useState("");
  // const [valueRadio, setValueRadios] = useState<number>(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClose = () => {
    setSnackbar({
      value: true,
      message: "Preencha todos os campos",
      vertical: "top",
      horizontal: "center",
    });
    setTimeout(() => {
      setSnackbar({
        value: false,
        message: "Preencha todos os campos",
        vertical: "top",
        horizontal: "center",
      });
    }, 2000);
  };

  function postarNovoPost() {
    if (!verificValue()) {
      return handleClose();
    }
    const idSecond =
      Math.floor(Math.random() * (100 - (props.data.length + 1) + 1)) +
      (props.data.length + 1);
    const dados = {
      category: get,
      value: valor,
      date: formatarData(date),
      id: idSecond.toString(),
    };

    if (stepSave) {
      const arr = {
        id: lineTable.id,
        category: get,
        value: valor,
        date: formatarData(date),
      };
      setStepSave(false);
      props.edititemInTable(arr);
      return clearItemsInForm();
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    };

    const endpoint = "http://localhost:3000/posts";

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar a requisição POST");
        }
        return response.json();
      })
      .then((data) => {
        props.getApiFunction();
        console.log("Resposta da requisição POST:", data);
        clearItemsInForm();
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

  const verificValue = () => {
    if (get === "" || valor === "" || date === "") {
      return false;
    }
    return true;
  };

  const clearItemsInForm = () => {
    setDate("");
    setGet("");
    setValor("");
  };

  const formatarData = (data: string) => {
    if (data.length !== 8) {
      return "00/00/0000";
    }
    const dia = data.slice(0, 2);
    const mes = data.slice(2, 4);
    const ano = data.slice(4);
    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  };

  useEffect(() => {
    setDate(lineTable.date);
    setValor(lineTable.value);
    setGet(lineTable.category);
  }, [lineTable]);

  return (
    <Box>
      <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
        <Box width={"25%"}>
          <TextField
            label="Categoria"
            variant="standard"
            fullWidth
            value={get}
            onChange={(e) => setGet(e.target.value)}
          />
        </Box>
        <span>testando: {stepFilter}</span>
        <Box width={"25%"}>
          <TextField
            label="Valor"
            variant="standard"
            type="number"
            fullWidth
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </Box>
        <Box width={"25%"}>
          <TextField
            label="dd/mm/aaaa"
            variant="standard"
            fullWidth
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Box>
        <Box width={"10%"} display={"flex"} justifyContent={"flex-end"}>
          {stepFilter > 0 ? (
            <ButtonComponent
              buttonClick={() => props.filterItemInTable(filterItem)}
              loading={loadingFormButton}
              title="Buscar"
              color="info"
            />
          ) : (
            <ButtonComponent
              buttonClick={postarNovoPost}
              loading={loadingFormButton}
              title={stepSave ? "Editar" : "Salvar"}
              color="info"
            />
          )}
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          marginBottom={5}
          style={{
            width: "75%",
          }}
        >
          <TextField
            label="Buscar..."
            variant="standard"
            fullWidth
            value={filterItem}
            onChange={(e) => setFilterItem(e.target.value)}
          />
        </Box>
        <Box
          paddingRight={1}
          style={{
            width: "45%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <label
            style={{
              fontFamily: "sans-serif",
              color: "gray",
              marginLeft: "10px",
              fontSize: 14,
            }}
          >
            <input
              type="radio"
              name="opcao"
              value={1}
              onChange={(e) => setStepFilter(e.target.value)}
            />
            Categoria
          </label>
          <label
            style={{
              fontFamily: "sans-serif",
              color: "gray",
              marginLeft: "10px",
              fontSize: 14,
            }}
          >
            <input
              type="radio"
              name="opcao"
              value={2}
              onChange={(e) => setStepFilter(e.target.value)}
            />
            Valor
          </label>
          <label
            style={{
              fontFamily: "sans-serif",
              color: "gray",
              marginLeft: "10px",
              fontSize: 14,
            }}
          >
            <input
              type="radio"
              name="opcao"
              value={3}
              onChange={(e) => setStepFilter(e.target.value)}
            />
            Preço
          </label>
        </Box>
      </Box>
    </Box>
  );
};
// npx json-server db.json
