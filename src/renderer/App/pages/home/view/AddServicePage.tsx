import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
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
import { PostRoutes, PutRoutes } from "../../../api/routes";
import { ResponseDisplay } from "../../../components";
import { setService } from "../../../features/AppReducer";
import {
  ResponseFail,
  ResponsePending,
  ResponseSuccessful,
} from "../../../features/ResponseReducer";
import { ChecksThunk } from "../../../functions/thunks";
import CheckModel, { CheckInfo, ICheckInfo } from "../../../models/CheckModel";
import { useAppDispatch, useAppSelector } from "../../../store";

export default function AddServicePage() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { service, slot } = useAppSelector((state) => state.AppReducer);
  const [tab, setTab] = React.useState<number>(0);

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

  function HandleCheckOut() {
    try {
      dispatch(
        ChecksThunk({ data: service, route: PutRoutes.CheckOut, method: "PUT" })
      );
    } catch (error) {
      dispatch(ResponseFail(error));
    }
  }

  React.useEffect(() => {
    service && setTab(1);
  }, [service]);
  return (
    <Box>
      <Stack direction="row" alignItems="center" paddingX={1} width="100%">
        <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
          <Tab label="Add Service" />
          <Tab label="Manage Service" />
        </Tabs>
      </Stack>
      <Divider />
      {tab === 0 && (
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
            <Stack
              sx={(theme) => ({
                alignSelf: "center",
                borderRadius: theme.spacing(0.85),
                border: "1px solid #d0d0d0",
                padding: theme.spacing(2),
                width: "100%",
              })}
              spacing={1}
            >
              <TextField
                variant="outlined"
                onChange={(e) =>
                  setInfo({ ...info, driverName: e.target.value })
                }
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
                onChange={(e) =>
                  setInfo({ ...info, phoneNumber: e.target.value })
                }
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
                onChange={(e) =>
                  setInfo({ ...info, carNumber: e.target.value })
                }
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
            </Stack>
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
            <Stack
              sx={(theme) => ({
                alignSelf: "center",
                borderRadius: theme.spacing(0.85),
                border: "1px solid #d0d0d0",
                padding: theme.spacing(2),
                width: "100%",
              })}
              spacing={1}
            >
              <Typography variant="body2">Note:</Typography>
              <TextField
                variant="outlined"
                size="small"
                multiline
                minRows={3}
                placeholder="Enter Note"
                value={info.note}
                onChange={(e) => setInfo({ ...info, note: e.target.value })}
              />
              <Button
                disabled={Boolean(slot)}
                onClick={HandleSubmit}
                variant={Boolean(slot) ? "contained" : "outlined"}
                size="small"
                color="primary"
              >
                {Boolean(slot) ? "Submit" : "Slot Available"}
              </Button>
            </Stack>
            <Divider />
          </Stack>
        </Stack>
      )}
      {tab === 1 && service && (
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
            <Stack
              sx={(theme) => ({
                alignSelf: "center",
                borderRadius: theme.spacing(0.85),
                border: "1px solid #d0d0d0",
                padding: theme.spacing(2),
                width: "100%",
              })}
              spacing={1}
            >
              <TextField
                value={service?.driverName}
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
                value={service.phoneNumber}
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
                value={service.carNumber}
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
                value={service.tagId}
                variant="outlined"
                size="small"
                placeholder="Service Tag"
              />
            </Stack>
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
            <Stack
              sx={(theme) => ({
                alignSelf: "center",
                borderRadius: theme.spacing(0.85),
                border: "1px solid #d0d0d0",
                padding: theme.spacing(2),
                width: "100%",
              })}
              spacing={1}
            >
              <Typography variant="body2">Note:</Typography>
              <TextField
                variant="outlined"
                size="small"
                multiline
                minRows={3}
                placeholder="Enter Note"
                value={service.note}
              />
              <Button
                onClick={HandleCheckOut}
                disabled={!service}
                variant="outlined"
                size="small"
                color="primary"
              >
                Check Out
              </Button>
            </Stack>
            <Divider />
          </Stack>
        </Stack>
      )}
      <ResponseDisplay error={error} message={message} />
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
