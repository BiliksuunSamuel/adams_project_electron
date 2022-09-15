import { SvgIconTypeMap, TableCellProps } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { IconType } from "react-icons/lib";

export interface ISidebarRoute {
  title: string;
  route?: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | IconType;
}

export interface IRecordTableHeader {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | IconType;
  props?: TableCellProps;
}
