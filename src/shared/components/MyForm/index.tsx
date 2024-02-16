import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
// contexts
import { myTableContext } from "../../contexts/MyTablecontext";
// compoents
import { ButtonComponent } from "../commom/ButtonComponent";
export const MyForm = () => {
  const [categoria, setCategoria] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [get, setGet] = useState<string>("");
  const [loadingFormButton, setLoadingFormButton] = useState<boolean>(false);

  const obterDataAtualFormatada = () => {
    console.log("fsdjkhbfkdsbfskjb");
    const dataAtual = new Date();
    formatarData(dataAtual);
    return console.log(dataAtual);
  };

  const saveMyform = () => {
    setLoadingFormButton(!loadingFormButton);
    setTimeout(() => {
      setLoadingFormButton(false);
    }, 2000);
  };

  function formatarData(dataString: Date) {
    const meses = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    const data = new Date(dataString);

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = meses[data.toLocaleString("en", { month: "short" })];
    const ano = data.getFullYear();

    return console.log(`${dia}/${mes}/${ano}`);
  }

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box width={"23%"}>
          <TextField
            label="Categoria"
            variant="standard"
            fullWidth
            value={myTableContext.secundDataTable.category}
            onChange={(e) =>
              (myTableContext.secundDataTable.category = e.target.value)
            }
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
              setDate(e.target.value), obterDataAtualFormatada();
            }}
          />
        </Box>
        <Box width={"23%"}>
          <ButtonComponent
            buttonClick={saveMyform}
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
