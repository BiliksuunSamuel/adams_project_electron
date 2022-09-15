import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import * as React from "react";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { FooterView } from "../../../view";
import { FcFeedback, FcKey } from "react-icons/fc";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store";
import { UserAuthenticationThunk } from "../../../functions/auth";
import { PostRoutes } from "../../../api/routes";
import { ResponseDisplay } from "../../../components";

interface IInfo {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigation = useNavigate();
  const [info, setInfo] = React.useState<IInfo>({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.UserReducer);
  const { error, message } = useAppSelector((state) => state.ResponseReducer);
  function HandleSubmit() {
    dispatch(
      UserAuthenticationThunk({ data: info, route: PostRoutes.UserLogin })
    );
  }

  React.useEffect(() => {
    user && navigation("/");
  }, [user]);
  return (
    <Stack alignItems="center" justifyContent="center">
      <Container
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Stack
          sx={(theme) => ({
            width: 400,
            [theme.breakpoints.down("sm")]: {
              width: "80%",
            },
            padding: theme.spacing(2),
            borderRadius: 0,
            boxShadow: theme.shadows[1],
            background: theme.palette.background.paper,
            height: 300,
          })}
          alignItems="center"
          justifyContent="flex-start"
          spacing={1.5}
        >
          <Stack
            alignItems="center"
            justifyContent="space-between"
            sx={(theme) => ({ padding: theme.spacing(1.5, 0), width: "100%" })}
            direction="row"
          ></Stack>
          <Stack sx={(theme) => ({ width: "90%" })} spacing={1.85}>
            <TextField
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  HandleSubmit();
                }
              }}
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcFeedback />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              size="small"
              placeholder="Email Address"
            />
            <TextField
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  HandleSubmit();
                }
              }}
              value={info.password}
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcKey />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      size="small"
                    >
                      {showPassword ? (
                        <VisibilityOutlined />
                      ) : (
                        <VisibilityOffOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              size="small"
            />
            <Button
              onClick={HandleSubmit}
              size="small"
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
            <Button
              sx={(theme) => ({
                textTransform: "none",
              })}
              variant="outlined"
              size="small"
              onClick={() => navigation("/auth/register")}
            >
              don't have Account? Register
            </Button>
          </Stack>
        </Stack>
        <ResponseDisplay error={error} message={message} />
      </Container>
      <FooterView />
    </Stack>
  );
}
