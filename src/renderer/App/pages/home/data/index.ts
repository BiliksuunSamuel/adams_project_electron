import {
  FcAutomotive,
  FcClock,
  FcDecision,
  FcDepartment,
  FcManager,
  FcPlanner,
} from "react-icons/fc";
import { BsPencilSquare } from "react-icons/bs";
import { IRecordTableHeader, ISidebarRoute } from "../interface";

export const SidebarRoutes: ISidebarRoute[] = [
  {
    title: "Add Service",
    route: "/home/service/add",
    icon: BsPencilSquare,
  },
  { title: "History", route: "/home/service/records", icon: FcAutomotive },
];

export const RecordsTableHeader: IRecordTableHeader[] = [
  { title: "Car Number", icon: FcAutomotive },
  { title: "Driver Name", icon: FcManager, props: { align: "left" } },
  { title: "Date Checked", icon: FcPlanner, props: { align: "left" } },
  { title: "Check-In Time", icon: FcClock, props: { align: "center" } },
  { title: "Check-Out Time", icon: FcClock, props: { align: "center" } },
  { title: "Lodge Id", icon: FcDepartment, props: { align: "left" } },
  { title: "Action", icon: FcDecision },
];
