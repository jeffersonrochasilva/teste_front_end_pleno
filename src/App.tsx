// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";

import { AppRoutes } from "./routes";
import { MenuLateral, SnackbarComponent, MyAppBar } from "./shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <MyAppBar />
            <AppRoutes />
            <SnackbarComponent />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
