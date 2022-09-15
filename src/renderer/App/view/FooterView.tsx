import { Box, Divider, Stack, Typography } from "@mui/material";
import moment = require("moment");
import * as React from "react";

export default function FooterView() {
  return (
    <Stack sx={(theme) => ({ width: "100%" })} padding={2}>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        padding={1.5}
      >
        <Typography variant="body2">
          CopyRight &#169; {moment().format("YYYY")} UENR DCEE
        </Typography>
      </Stack>
    </Stack>
  );
}
