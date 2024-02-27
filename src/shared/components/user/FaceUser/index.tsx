import { Box, Icon } from "@mui/material";
import { useEffect } from "react";
interface Users {
  id: string;
  name: string;
  sexo: string;
}
export const FaceUser = (props: { item: Users }) => {
  useEffect(() => {
    console.log(props, "props");
  });
  return (
    <Box
      style={{
        margin: 10,
        height: 110,
        width: "90%",
        padding: 3,
        borderRadius: "5px",
        background: "#FFF",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          width: 100,
          height: 100,
          border: 2,
          borderColor: "red",
          borderRadius: 5,
          margin: 7,
          background: props.item.sexo === "x" ? "#ffc1d4" : "#54a9ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        border={2}
        borderColor="blue"
      >
        <Icon
          color={props.item.sexo === "x" ? "error" : "info"}
          fontSize="large"
        >
          person
        </Icon>
      </Box>
      <Box
        style={{
          height: "80%",
          padding: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          // background: "red",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
          }}
        >
          {props.item.name}
        </span>
        <span
          style={{
            fontFamily: "sans-serif",
            color: "gray",
            fontSize: "14px",
          }}
        >
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
        </span>
      </Box>
    </Box>
  );
};
