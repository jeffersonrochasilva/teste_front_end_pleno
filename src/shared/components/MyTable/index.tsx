import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
// recoil
import { useRecoilState } from "recoil";
import { dataHeaderStore } from "../../store/table";
// comonets
import { ButtonComponent } from "../commom";
interface Item {
  category: string;
  value: string;
  date: string;
  id: number;
}

export const MyTable = (props: unknown) => {
  const [dataHeader] = useRecoilState(dataHeaderStore);

  const [loadingExcluir] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const deletePort = async (item: Item) => {
    console.log("id do item", item.id);

    try {
      const response = await axios.delete(
        `http://localhost:3000/posts/${item.id}`
      );
      console.log("deu certo", response);
      props.getApiFunction();
    } catch (err: unknown) {
      console.log("ERROR", err);
    }
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
          {props.data &&
            props.data.map((row: Item) => (
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
                      buttonClick={() => props.getItemInTebla(row)}
                    />
                    <ButtonComponent
                      marginRight="0px"
                      icon={true}
                      loading={loadingExcluir}
                      iconsName="delete"
                      variantype="text"
                      color="error"
                      buttonClick={() => deletePort(row)}
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
