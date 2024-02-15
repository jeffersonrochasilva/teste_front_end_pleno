import {
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDrawerContext } from "../../contexts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ListItem {
  title: string;
  route: string;
}

export const MenuLateral: React.FC = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
  const [dataList] = useState<ListItem[]>([
    {
      title: "Dashboard",
      route: "/dashboard",
    },
    {
      title: "Usuário",
      route: "/",
    },
  ]);

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Divider />
          <Box
            width="100%"
            height={theme.spacing(7.8)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ExpandMoreIcon />
          </Box>
          <Divider />

          <Box flex={1}>
            <List component="nav">
              {dataList.map((text, index) => (
                <Link
                  to={text.route}
                  style={{ textDecoration: "none", color: "black" }}
                  key={text.title}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? (
                          <Icon>home</Icon>
                        ) : (
                          <Icon>home</Icon>
                        )}
                      </ListItemIcon>
                      <ListItemText primary={text.title} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
          <Divider />
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
