import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Divider, InputAdornment, Stack, TextField } from "@mui/material";
import { FcReadingEbook } from "react-icons/fc";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  handleClose: () => void;
  open: boolean;
}

export default function SearchRecord({ open, handleClose }: IProps) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Search Record</DialogTitle>
      <DialogContent dividers>
        <Stack
          alignSelf="center"
          alignItems="center"
          justifyContent="center"
          sx={(theme) => ({
            width: "100%",
            padding: theme.spacing(2),
          })}
        >
          <TextField
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FcReadingEbook />
                </InputAdornment>
              ),
            }}
            fullWidth
            size="small"
            placeholder="Car Registration, Customer Name ..."
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
