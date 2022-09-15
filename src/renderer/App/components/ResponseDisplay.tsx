import { Stack, Typography } from "@mui/material";
import * as React from "react";

interface IProps {
  error?: any;
  message?: any;
}
export default function ResponseDisplay({ error, message }: IProps) {
  if (Boolean(error || message)) {
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={(theme) => ({
          width: "100%",
          padding: theme.spacing(1),
        })}
      >
        {message && (
          <Typography variant="body1" textAlign="center" color="seagreen">
            {message}
          </Typography>
        )}
        {error && (
          <Typography variant="body1" textAlign="center" color="red">
            {error}
          </Typography>
        )}
      </Stack>
    );
  } else {
    return null;
  }
}
