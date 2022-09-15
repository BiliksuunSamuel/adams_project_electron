import { TableCell, TableCellProps } from "@mui/material";
import * as React from "react";

interface IProps {
  children: React.ReactNode;
  props?: TableCellProps;
}
export default function CustomTableCell({ children, props }: IProps) {
  return (
    <TableCell
      sx={(theme) => ({
        padding: theme.spacing(0.85),
      })}
      {...props}
    >
      {children}
    </TableCell>
  );
}
