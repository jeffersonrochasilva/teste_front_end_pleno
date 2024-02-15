import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Box } from "@mui/material";

// comonets
import { ButtonComponent } from "../commom";

export const MyTable = () => {
  const [dataHeader] = useState<Array<string>>([
    "Categoria",
    "Valor",
    "Data",
    "Ações",
  ]);

  const [data] = useState([
    { category: "Categoria1", value: "12,32", date: "30/01/2024", id: 1 },
    { category: "Categoria2", value: "13,32", date: "30/01/2024", id: 2 },
    { category: "Categoria3", value: "12,32", date: "30/01/2024", id: 3 },
  ]);

  const [loadingSave, setLoadingSave] = useState(false);
  function handleClick() {
    setLoadingSave(!loadingSave);
    setTimeout(() => {
      setLoadingSave(false);
    }, 2000);
  }
  const [loadingExcluir, setLoadingExcluir] = useState(false);
  function handleClickExcluir() {
    setLoadingExcluir(!loadingExcluir);

    setTimeout(() => {
      setLoadingExcluir(false);
    }, 2000);
  }

  const edititemInTable = (item: any) => {
    alert("Então você quer editar este item, né?");
    console.log("o console.log funcinou", item);
  };

  return (
    // <MyDataTableContext>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            {dataHeader.map((item) => (
              <TableCell sx={{ minWidth: 150 }} align="left" key={item}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="left">{row.value}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <Box display={"flex"}>
                  {/* <Button
                    buttonClick={handleClick}
                    loading={loadingSave}
                    title="Salvar"
                    color="success"
                  /> */}
                  <ButtonComponent
                    marginRight="0px"
                    icon={true}
                    variantype="text"
                    buttonClick={() => edititemInTable(row)}
                  />
                  <ButtonComponent
                    marginRight="0px"
                    icon={true}
                    loading={loadingExcluir}
                    iconsName="delete"
                    variantype="text"
                    color="error"
                    buttonClick={handleClickExcluir}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
