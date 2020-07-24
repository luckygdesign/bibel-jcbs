import frontMatter from "front-matter";
import { promises as fs } from "fs";
import path from "path";

const BASE_DIR: string = "content";
type IWeekInput = {
  link?: string;
  heading?: string;
};

export type IWeek = {
  link?: string;
  heading?: string;
  week: string;
  year: string;
  body?: string;
};

export async function getWeekContent(
  year: string,
  week: string
): Promise<IWeek> {
  const content = await fs.readFile(
    path.resolve(process.cwd(), `${BASE_DIR}/${year}/${week}.md`),
    "utf8"
  );

  const { attributes, body } = frontMatter<IWeekInput>(content);
  return { year, week, ...attributes, body };
}

export async function getAllWeeks(year: string): Promise<IWeek[]> {
  const weekPaths = await fs.readdir(
    path.resolve(process.cwd(), `${BASE_DIR}/${year}`)
  );

  return await Promise.all(
    weekPaths.map(async (path) => {
      return await getWeekContent(year, path.replace(/^.*[\\\/]/, ""));
    })
  );
}
