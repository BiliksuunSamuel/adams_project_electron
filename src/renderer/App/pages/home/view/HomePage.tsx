import { Box, IconButton, Stack, Typography } from "@mui/material";
import moment = require("moment");
import * as React from "react";
import {
  FcCalendar,
  FcReadingEbook,
  FcSurvey,
  FcSynchronize,
} from "react-icons/fc";
import { Outlet, useNavigate } from "react-router-dom";
import { GetRoutes, socketURL } from "../../../api/routes";
import { Loader } from "../../../components";
import { ChecksThunk } from "../../../functions/thunks";
import { useAppDispatch, useAppSelector } from "../../../store";
import socketIo from "socket.io-client";
import { Socket } from "socket.io-client";
import {
  AccountMenu,
  Navbar,
  RecordsTable,
  SearchRecord,
  Sidebar,
} from "../components";
import { SocketEvents } from "../../../constants";
import { setSlot } from "../../../features/AppReducer";

let socket: Socket;
export default function HomePage() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const [sidebar, setSidebar] = React.useState<boolean>(true);
  const [account, setAccount] = React.useState<HTMLElement | null>(null);
  const [search, setSearch] = React.useState<boolean>(false);
  const [view, setView] = React.useState<boolean>(false);
  const { checks } = useAppSelector((state) => state.ChecksReducer);
  const { user } = useAppSelector((state) => state.UserReducer);
  React.useEffect(() => {
    navigation("service/add");
    dispatch(ChecksThunk({ route: GetRoutes.GetChecks, method: "GET" }));
  }, []);

  React.useEffect(() => {
    socket = socketIo(socketURL, { transports: ["websocket"] });
    socket.on(SocketEvents.slot, (data) => {
      dispatch(setSlot(parseInt(data)));
    });
  }, []);

  React.useEffect(() => {
    !user && navigation("/auth/login");
  }, [user]);
  return (
    <Box sx={(theme) => ({ overflow: "hidden" })}>
      <Sidebar handleClose={() => setSidebar(!sidebar)} open={sidebar} />
      <AccountMenu anchorEl={account} handleClose={() => setAccount(null)} />
      <SearchRecord open={search} handleClose={() => setSearch(!search)} />
      <Navbar
        handleSearch={() => setSearch(!search)}
        sidebar
        handleSidebar={() => setSidebar(!sidebar)}
        handleAccountMenu={(event) => setAccount(event.currentTarget)}
      />
      <Box
        sx={(theme) => ({
          height: view ? "0px" : "50vh",
          padding: theme.spacing(1),
          background: theme.palette.action.hover,
          paddingLeft: sidebar ? "240px" : "0px",
          overflowY: "auto",
          overflowX: "hidden",
          width: "100%",
          transition: "all 0.45s ease-in-out",
          // transform: `translateY(${view ? "-200%" : "0%"})`,
        })}
      >
        <Outlet />
      </Box>
      {!view && (
        <Box
          sx={(theme) => ({
            borderBottom: "1px solid #d0d0d0",
            borderRadius: "25px",
            width: "100%",
          })}
        />
      )}
      <Box
        sx={(theme) => ({
          height: !view ? "80%" : "100%",
          paddingLeft: sidebar ? "240px" : "0px",
        })}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          paddingX={1}
          sx={(theme) => ({
            boxShadow: theme.shadows[1],
            margin: theme.spacing(0.5, 0),
          })}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
          >
            <FcReadingEbook size={20} />
            <Typography variant="body2">Service Records</Typography>
            <FcCalendar size={20} />
            <Typography variant="body2">
              {moment().format(" dd,   DD MMMM, YYYY")}
            </Typography>
          </Stack>
          <Stack
            spacing={1.25}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            paddingX={2}
          >
            <IconButton onClick={() => setView(!view)} size="small">
              <FcSurvey />
            </IconButton>
            <IconButton
              onClick={() =>
                dispatch(
                  ChecksThunk({ route: GetRoutes.GetChecks, method: "GET" })
                )
              }
              size="small"
            >
              <FcSynchronize />
            </IconButton>
          </Stack>
        </Stack>
        <RecordsTable checks={checks} sidebar />
      </Box>
    </Box>
  );
}
