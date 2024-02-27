import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";

import { Cadastro } from "../pages";
import { Dashboard } from "../pages/Dashboard";
import { User } from "../pages/User";

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route
        path="/page-initial"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}
          >
            teste
          </Button>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<Navigate to="/page-initial" />} />
    </Routes>
  );
};
