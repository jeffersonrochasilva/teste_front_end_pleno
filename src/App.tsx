// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "./routes";
import { MenuLateral, SnackbarComponent, MyAppBar } from "./shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <RecoilRoot>
          <BrowserRouter>
            <MenuLateral>
              <MyAppBar />
              <AppRoutes />
              <SnackbarComponent />
            </MenuLateral>
          </BrowserRouter>
        </RecoilRoot>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
