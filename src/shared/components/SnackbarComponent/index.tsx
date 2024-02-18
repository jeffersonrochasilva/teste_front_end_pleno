import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

// recoil
import { useRecoilState } from "recoil";
import { snackbarStore } from "../../store/general";

export const SnackbarComponent = () => {
  const [snackbar, setSnackbar] = useRecoilState(snackbarStore);

  const handleClose = () => {
    setSnackbar({
      value: false,
      message: "hello word",
      vertical: "top",
      horizontal: "center",
    });
  };

  return (
    <>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={snackbar.value}
          onClose={handleClose}
          message={snackbar.message}
          key={snackbar.vertical + snackbar.horizontal}
        />
      </Box>
    </>
  );
};
