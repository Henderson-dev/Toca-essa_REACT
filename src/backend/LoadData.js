import { get } from "./DataService";

export default async function loadDataSite(urlData) {
  const allData = await get(urlData);
  return allData;
}
