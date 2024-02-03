import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDrawerContext } from "../../contexts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMoreOutlined } from "@mui/icons-material";
export const MenuLateral: React.FC = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

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
            {/* <Avatar
              // sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              B
            </Avatar> */}
            <ExpandMoreIcon />
            <ExpandMoreIcon />
          </Box>

          <Divider />
          <Box height={theme.spacing(5)}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </List>
          </Box>
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Usuário" />
              </ListItemButton>
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
