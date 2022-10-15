import Fusejs from "fuse.js";
import CheckModel from "../renderer/App/models/CheckModel";

const fields = ["carNumber", "driverName", "phoneNumber"];

export function RecordSearch(query: string, data: CheckModel[]): CheckModel[] {
  const fuse = new Fusejs(data, { keys: fields });
  return fuse.search(query).map((record) => record.item);
}
