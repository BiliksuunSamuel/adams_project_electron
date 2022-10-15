import {
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import moment = require("moment");

import * as React from "react";
import { FcViewDetails } from "react-icons/fc";
import { setService } from "../../../features/AppReducer";
import CheckModel from "../../../models/CheckModel";
import { useAppDispatch } from "../../../store";
import { RecordsTableHeader } from "../data";
import { CustomTableCell } from "../shared";

interface IProps {
  sidebar: boolean;
  checks: CheckModel[];
}
export default function RecordsTable({ sidebar, checks }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <TableContainer
      sx={(theme) => ({
        background: theme.palette.common.white,
        borderRadius: 0,
      })}
      component={Paper}
      variant="outlined"
      elevation={0}
    >
      <Table>
        <TableHead sx={(theme) => ({ padding: theme.spacing(1) })}>
          <TableRow sx={(theme) => ({ padding: theme.spacing(2) })}>
            {RecordsTableHeader.map((info) => (
              <CustomTableCell props={info.props} key={info.title}>
                <Stack alignItems="center" spacing={0.85} direction="row">
                  <info.icon />{" "}
                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.common.black,
                    })}
                    variant="body2"
                  >
                    {info.title}
                  </Typography>
                </Stack>
              </CustomTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {checks.map((chck) => (
            <TableRow key={chck._id}>
              <CustomTableCell>
                <Typography variant="body2">{chck.carNumber}</Typography>
              </CustomTableCell>
              <CustomTableCell props={{ align: "left" }}>
                <Typography variant="body2">{chck.driverName}</Typography>
              </CustomTableCell>
              <CustomTableCell props={{ align: "left" }}>
                <Typography variant="body2">{chck.dateChecked}</Typography>
              </CustomTableCell>
              <CustomTableCell props={{ align: "center" }}>
                <Typography variant="body2">{chck.checkInTime}</Typography>
              </CustomTableCell>
              <CustomTableCell props={{ align: "center" }}>
                <Typography variant="body2">
                  {chck.checkOutTime
                    ? moment(chck.checkOutTime).format("h:m:s a")
                    : "----"}
                </Typography>
              </CustomTableCell>
              <CustomTableCell props={{ align: "left" }}>
                <Typography variant="body2">{chck.tagId}</Typography>
              </CustomTableCell>
              <CustomTableCell props={{ align: "center" }}>
                <IconButton
                  onClick={() => dispatch(setService(chck))}
                  size="small"
                >
                  <FcViewDetails />
                </IconButton>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
