import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Box } from "@mui/material";

// recoil
import { useRecoilState } from "recoil";
import { tableStore } from "../../store/table";
import { lineTableStore } from "../../store/table";
import { dataHeaderStore } from "../../store/table";
import { snackbarStore } from "../../store/general";

// comonets
import { ButtonComponent } from "../commom";
interface Item {
  category: string;
  value: string;
  date: string;
  id: number;
}

export const MyTable = () => {
  const [tableStores, setTableStores] = useRecoilState(tableStore);
  const [lineTable, setLineTable] = useRecoilState(lineTableStore);
  const [dataHeader] = useRecoilState(dataHeaderStore);
  const [snackbar, setSnackbar] = useRecoilState(snackbarStore);

  const [loadingExcluir, setLoadingExcluir] = useState(false);
  function handleClickExcluir(params: Item) {
    setLoadingExcluir(!loadingExcluir);
    setTimeout(() => {
      const arr = tableStores.filter((item) => item.id != params.id);
      setTableStores(arr);
      setLoadingExcluir(false);
      setSnackbar({
        value: true,
        message: "produto excluido com sucesso!",
        vertical: "top",
        horizontal: "center",
      });
      setTimeout(() => {
        setSnackbar({
          value: false,
          message: "",
          vertical: "",
          horizontal: "",
        });
      }, 2000);
      console.log("atom da tabela", tableStores);
    }, 2000);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const edititemInTable = (item: any) => {
    console.log(snackbar);
    setLineTable([item]);
    console.log("ätom da linha", lineTable);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption </caption>
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
          {tableStores.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="left">{row.value}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <Box display={"flex"}>
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
                    buttonClick={() => handleClickExcluir(row)}
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
