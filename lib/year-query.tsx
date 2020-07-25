import { promises as fs } from "fs";
import path from "path";
import { IWeek, getAllWeeks } from "./week-query";

const BASE_DIR: string = "content";

export async function getAllYears(): Promise<IWeek[][]> {
  const yearsPath = await fs.readdir(
    path.resolve(process.cwd(), `${BASE_DIR}`)
  );

  return await Promise.all(
    yearsPath.map(async (path) => {
      return await getAllWeeks(path);
    })
  );
}
