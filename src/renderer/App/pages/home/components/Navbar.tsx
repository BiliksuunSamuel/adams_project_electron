import {
  AppBar,
  Chip,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { FcManager, FcMenu, FcSearch } from "react-icons/fc";

interface IProps {
  sidebar: boolean;
  handleSidebar: () => void;
  handleAccountMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleSearch: () => void;
}
export default function Navbar({
  sidebar,
  handleSidebar,
  handleAccountMenu,
  handleSearch,
}: IProps) {
  return (
    <AppBar
      sx={(theme) => ({
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingLeft: sidebar ? "240px" : "0px",
        backgroundColor: theme.palette.background.paper,
      })}
      variant="outlined"
      position="relative"
      color="default"
    >
      <Toolbar
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
        ></Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={1.5}
        >
          <Chip
            onClick={handleSearch}
            sx={(theme) => ({
              bordeRadius: theme.spacing(0.5),
              boxShadow: theme.shadows[1],
              background: theme.palette.background.default,
            })}
            avatar={<FcSearch style={{ background: "transparent" }} />}
            label={<Typography variant="body1">Search</Typography>}
          />
          <IconButton onClick={handleAccountMenu} size="small">
            <FcManager />
          </IconButton>
          <IconButton onClick={handleSidebar} size="small">
            <FcMenu />
          </IconButton>
          <Stack marginRight={4} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
