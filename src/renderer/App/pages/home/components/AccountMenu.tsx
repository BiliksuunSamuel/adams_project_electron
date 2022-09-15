import { Menu, MenuItem } from "@mui/material";
import * as React from "react";
import { UserLogout } from "../../../features/UserReducer";
import { useAppDispatch } from "../../../store";

interface IProps {
  handleClose: () => void;
  anchorEl: HTMLElement | null;
}
export default function AccountMenu({ handleClose, anchorEl }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClick={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          dispatch(UserLogout());
        }}
      >
        SignOut
      </MenuItem>
    </Menu>
  );
}
