import { Box, TextField } from "@mui/material";
import { useState } from "react";

// recoil
import { useRecoilState } from "recoil";
import { tableStore } from "../../store/table";

import { ButtonComponent } from "../commom/ButtonComponent";

export const MyForm = () => {
  function postarNovoPost() {
    const dados = {
      category: "Categoria1",
      value: "12,32",
      date: "30/01/2024",
      id: 2,
    };

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
        console.log("Resposta da requisição POST:", data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

  const [valor, setValor] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [get, setGet] = useState<string>("");
  const [loadingFormButton, setLoadingFormButton] = useState<boolean>(false);

  const [tableData, setTableData] = useRecoilState(tableStore);

  const saveMyform = () => {
    setLoadingFormButton(!loadingFormButton);
    const arr = [
      {
        category: get,
        value: valor,
        date: formatarData(date),
        id: tableData.length + 1,
      },
      ...tableData,
    ];
    setTableData(arr);
    console.log("fdskjhaljkba", arr);
    setTimeout(() => {
      setLoadingFormButton(false);
    }, 2000);
  };

  const formatarData = (data: string) => {
    if (data.length !== 8) {
      return "Formato de data inválido. Por favor, forneça a data no formato DDMMAAAA.";
    }

    const dia = data.slice(0, 2);
    const mes = data.slice(2, 4);
    const ano = data.slice(4);

    const dataFormatada = `${dia}/${mes}/${ano}`;

    return dataFormatada;
  };

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box width={"23%"}>
          <TextField
            label="Categoria"
            variant="standard"
            fullWidth
            value={get}
            onChange={(e) => setGet(e.target.value)}
          />
        </Box>
        <Box width={"23%"}>
          <TextField
            label="Valor"
            variant="standard"
            type="number"
            fullWidth
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </Box>
        <Box width={"23%"}>
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
        <Box width={"23%"}>
          <ButtonComponent
            buttonClick={postarNovoPost}
            loading={loadingFormButton}
            title="Salvar"
            color="info"
          />
        </Box>
      </Box>
      <Box marginBottom={5}>
        <TextField
          label="Buscar..."
          variant="standard"
          fullWidth
          value={get}
          onChange={(e) => setGet(e.target.value)}
        />
      </Box>
    </Box>
  );
};
