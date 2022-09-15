import { Box, Chip, Divider, Typography } from "@mui/material";
import * as React from "react";
import { ISidebarRoute } from "../interface";

interface IProps {
  info: ISidebarRoute;
}
export default function SidebarLink({ info }: IProps) {
  return (
    <Box>
      <Chip
        sx={(theme) => ({
          borderRadius: 0,
          width: "100%",
          boxShadow: 0,
          background: "transparent",
          alignItems: "center",
          justifyContent: "flex-start",
        })}
        onClick={() => {}}
        avatar={<info.icon />}
        label={<Typography variant="body2">{info.title}</Typography>}
      />
      <Divider />
    </Box>
  );
}
