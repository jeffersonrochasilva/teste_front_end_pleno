import * as React from "react";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export const SnackbarComponent = () => {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
    console.log("chamou......");
    setTimeout(() => {
      setState({ ...newState, open: false });
    }, 2000);
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
      >
        Bottom-Center
      </Button>
    </Box>
  );
  return (
    <>
      <Box sx={{ width: 500 }}>
        {buttons}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
        />
      </Box>
    </>
  );
};
