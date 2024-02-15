import { LoadingButton } from "@mui/lab";
import { Icon, Button } from "@mui/material";
import { MouseEventHandler } from "react";

export const ButtonComponent = (props: {
  buttonClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  loading?: boolean | undefined;
  title?: string;
  color?: string;
  marginRight?: string;
  icon?: boolean;
  variantype?: string;
  iconsName?: string;
}) => {
  return (
    <LoadingButton
      size="small"
      onClick={props.buttonClick}
      loading={props.loading}
      color={props.color}
      variant={props.variantype ? props.variantype : "outlined"}
      style={{
        marginRight: props.marginRight ? props.marginRight : "10px",
        marginTop: "10px",
      }}
    >
      {props.icon ? (
        <Icon>{props.iconsName ? props.iconsName : "edit"}</Icon>
      ) : (
        <span>{props.title}</span>
      )}
    </LoadingButton>
  );
};
