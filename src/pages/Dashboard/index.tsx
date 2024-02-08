import { Box } from "@mui/material";
import { ContentText, MyTable, MyForm } from "../../shared/components";

export const Dashboard = () => {
  return (
    <Box padding={5}>
      <ContentText />
      <MyForm />
      <MyTable />
    </Box>
  );
};
