export interface ICheckInfo {
  driverName: string;
  carNumber: string;
  dateCreated: string;
  dateChecked: string;
  checkInTime: string;
  checkOutTime: string;
  lodgeId: string;
  tagId: string;
  userId: string;
  status: number;
  note: string;
  phoneNumber: string;
}

export default interface CheckModel extends ICheckInfo {
  _id: string;
}

export const CheckInfo: ICheckInfo = {
  driverName: "",
  carNumber: "",
  dateChecked: "",
  dateCreated: "",
  checkInTime: "",
  checkOutTime: "",
  tagId: "",
  userId: "",
  lodgeId: "",
  status: 0,
  note: "",
  phoneNumber: "",
};
