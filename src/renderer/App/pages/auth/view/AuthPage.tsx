import { Box, Divider, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
export default function AuthPage() {
  const navigation = useNavigate();

  React.useEffect(() => {
    navigation("login");
  }, []);
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.action.hover,
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      })}
    >
      <Box
        sx={(theme) => ({
          // background: "#dc3d4b",
          background: theme.palette.background.paper,
          height: 150,
          clipPath: "ellipse(75% 100% at 65% 0%)",
        })}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding={2}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            paddingLeft={1}
          >
            <Typography variant="h6">AdamsProject</Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            paddingRight={1}
          >
            <Typography variant="body1">Automated Packing Lodge</Typography>
          </Stack>
        </Stack>
        <Divider />
      </Box>
      <Box
        sx={(theme) => ({
          marginTop: theme.spacing(5),
        })}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
