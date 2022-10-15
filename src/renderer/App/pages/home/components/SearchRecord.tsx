import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  Divider,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { FcReadingEbook } from "react-icons/fc";
import CheckModel from "../../../models/CheckModel";
import { useAppDispatch, useAppSelector } from "../../../store";
import { RecordSearch } from "../../../../../services";
import { setService, setSlot } from "../../../features/AppReducer";

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
  const [results, setResults] = React.useState<CheckModel[]>([]);
  const { checks } = useAppSelector((state) => state.ChecksReducer);
  const dispatch = useAppDispatch();
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
            onChange={(e) => setResults(RecordSearch(e.target.value, checks))}
            fullWidth
            size="small"
            placeholder="Car Registration, Customer Name ..."
          />
        </Stack>
        <Stack alignItems="center" justifyContent="center" width="100%">
          {results.map((re) => (
            <MenuItem
              key={re._id}
              sx={(theme) => ({
                width: "100%",
              })}
              onClick={() => dispatch(setService(re))}
            >
              {re.driverName}
            </MenuItem>
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
