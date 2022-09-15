import { Backdrop } from "@mui/material";
import * as React from "react";

interface IProps {
  open?: boolean;
}
export default function Loader({ open }: IProps) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 100 }}
      open={open}
    >
      <span className="loader"></span>
    </Backdrop>
  );
}
