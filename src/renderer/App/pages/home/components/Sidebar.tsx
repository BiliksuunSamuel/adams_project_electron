import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { FcPrevious } from "react-icons/fc";
import { SidebarRoutes } from "../data";
import { SidebarLink } from "../shared";

interface IProps {
  handleClose: () => void;
  open: boolean;
}
export default function Sidebar({ handleClose, open }: IProps) {
  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={(theme) => ({ width: "240px", overflow: "Hidden" })}
    >
      <Box
        sx={(theme) => ({
          width: "240px",
          height: "100vh",
          background: theme.palette.action.hover,
          overflow: "hidden",
        })}
      >
        <Stack
          alignItems="center"
          justifyContent="space-between"
          sx={(theme) => ({
            height: "50px",
            width: "100%",
            padding: theme.spacing(0, 1),
          })}
          direction="row"
        >
          <Typography variant="body1">AuomatedPackingLodge</Typography>
          <IconButton onClick={handleClose} size="small">
            <FcPrevious />
          </IconButton>
          <Stack marginRight={1} />
        </Stack>
        <Divider />
        <Stack>
          {SidebarRoutes.map((route) => (
            <SidebarLink info={route} key={route.title} />
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
}
