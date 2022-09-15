import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import {
  FcBookmark,
  FcBusinessman,
  FcInTransit,
  FcMultipleInputs,
  FcPhone,
  FcReadingEbook,
  FcViewDetails,
} from "react-icons/fc";
import { useNavigate } from "react-router";
import Controller from "../../../api/controller";
import { PostRoutes } from "../../../api/routes";
import { ResponseDisplay } from "../../../components";
import {
  ResponseFail,
  ResponsePending,
  ResponseSuccessful,
} from "../../../features/ResponseReducer";
import { ChecksThunk } from "../../../functions/thunks";
import { CheckInfo, ICheckInfo } from "../../../models/CheckModel";
import { useAppDispatch, useAppSelector } from "../../../store";

export default function AddServicePage() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { error, message } = useAppSelector((state) => state.ResponseReducer);
  const [info, setInfo] = React.useState<ICheckInfo>(CheckInfo);

  async function HandleGetTag() {
    try {
      dispatch(ResponsePending());
      const results = await Controller<string>({
        data: { carNumber: info.carNumber },
        url: PostRoutes.GetTagId,
      });
      setInfo({ ...info, tagId: results });
      dispatch(ResponseSuccessful(null));
    } catch (error) {
      dispatch(ResponseFail(error));
    }
  }

  function HandleSubmit() {
    try {
      ValidateInfo(info);
      dispatch(ChecksThunk({ data: info, route: PostRoutes.CheckAdd }));
      setInfo(CheckInfo);
    } catch (error) {
      dispatch(ResponseFail(error));
    }
  }
  return (
    <Box>
      <Stack
        alignSelf="flex-start"
        spacing={1}
        alignItems="flex-start"
        justifyContent="center"
        padding={1}
        direction="row"
      >
        <Stack
          sx={(theme) => ({
            flex: 1,
            height: "100%",
            padding: theme.spacing(1.5),
            borderRight: "1px solid #f0f0f0",
          })}
          spacing={1}
        >
          <Typography variant="body1">Check In</Typography>
          <Divider />
          <TextField
            variant="outlined"
            onChange={(e) => setInfo({ ...info, driverName: e.target.value })}
            value={info.driverName}
            size="small"
            placeholder="Driver Name"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FcBusinessman />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            onChange={(e) => setInfo({ ...info, phoneNumber: e.target.value })}
            value={info.phoneNumber}
            variant="outlined"
            size="small"
            placeholder="Phone Number"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FcPhone />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            onChange={(e) => setInfo({ ...info, carNumber: e.target.value })}
            value={info.carNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FcInTransit />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={HandleGetTag} size="small">
                    <FcMultipleInputs />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            placeholder="Car Number"
          />

          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FcBookmark />
                </InputAdornment>
              ),
            }}
            value={info.tagId}
            variant="outlined"
            size="small"
            placeholder="Service Tag"
          />
          <ResponseDisplay error={error} message={message} />
          <Typography variant="body2">Note:</Typography>
          <TextField
            variant="outlined"
            size="small"
            multiline
            minRows={2.5}
            placeholder="Enter Note"
            value={info.note}
            onChange={(e) => setInfo({ ...info, note: e.target.value })}
          />
          <Button
            onClick={HandleSubmit}
            variant="contained"
            size="small"
            color="primary"
          >
            Submit
          </Button>
        </Stack>
        <Stack
          sx={(theme) => ({
            flex: 1,
          })}
          spacing={1}
          alignItems="flex-start"
          justifyContent="flex-start"
          padding={1}
        >
          <Typography variant="body1">Manage Service</Typography>
          <Divider />
          <Stack
            sx={(theme) => ({
              alignSelf: "center",
              borderRadius: theme.spacing(1),
              border: "1px solid #d0d0d0",
              padding: theme.spacing(1.5),
              width: "100%",
            })}
          >
            <Stack
              spacing={1.5}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <TextField
                variant="standard"
                placeholder="Enter Service ID"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FcReadingEbook />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <Chip
                label={<Typography variant="body2">Load</Typography>}
                size="small"
                avatar={<FcViewDetails />}
                sx={(theme) => ({
                  borderRadius: theme.spacing(0.25),
                  background: theme.palette.background.paper,
                })}
                onClick={() => {}}
              />
            </Stack>
          </Stack>
          <Typography variant="body2">Please Enter The Service Id</Typography>
          <Divider />
        </Stack>
      </Stack>
    </Box>
  );
}

function ValidateInfo(info: ICheckInfo) {
  if (info.driverName.length <= 0) {
    throw "Driver Name Required";
  }
  if (info.phoneNumber.trim().length != 10) {
    throw "Invalid Phone Number, 10 digits required";
  }
  if (info.carNumber.length <= 0) {
    throw "Car Number Required";
  }
}
