import { GetStaticProps, GetStaticPaths } from "next";
import { getWeekContent, IWeek, getAllWeeks } from "../../lib/week-query";
import { ParsedMD } from "lib/parseMd";
import ReactPlayer from "react-player";
import { Layout } from "components/Layout";
import { getAllYears } from "lib/year-query";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { Footer } from "components/Footer";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      weeks: await getAllWeeks(params?.year as string),
      year: params?.year as string,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const years = await getAllYears();

  // Get the paths we want to pre-render based on posts
  const paths: (
    | string
    | {
        params: ParsedUrlQuery;
      }
  )[] = [];

  years.map((year) =>
    paths.push({
      params: { year: year[0].year },
    })
  );

  return { paths, fallback: false };
};

function YearPage(pageProps: { weeks: IWeek[]; year: string }) {
  const { year, weeks } = pageProps;
  return (
    <Layout>
      <Layout.Container>
        <div className="text-lg max-w-prose mx-auto mb-6">
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Jahr {year}
          </h1>
        </div>
        <p className="prose prose-lg text-gray-500 mx-auto text-center">
          Ich freue mich über dein Wort wie einer, der große Beute macht. -
          Psalm 119,163
        </p>
      </Layout.Container>
      <div className="bg-gray-200">
        <Layout.Container>
          <WochenUebersicht weeks={weeks} />
        </Layout.Container>
      </div>

      <Footer />
    </Layout>
  );
}

export default YearPage;

const WochenUebersicht = ({ weeks }: { weeks: IWeek[] }) => {
  const weeksSort = weeks.sort(
    (a, b) => parseInt(a.woche || "0") - parseInt(b.woche || "0")
  );
  return (
    <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      {weeks.map((week) => (
        <WochenItem key={week.woche} week={week} />
      ))}
    </div>
  );
};

const WochenItem = ({ week }: { week: IWeek }) => {
  return (
    <Link href="/[year]/[week]" as={`/${week.year}/${week.woche}`}>
      <a className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={week.image}
            alt={`Hintergrundbild für Woche ${week.woche}`}
          />
        </div>

        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm leading-5 font-medium text-accent-600">
              <a href="#" className="hover:underline">
                Schulwoche {week.woche}
              </a>
            </p>
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {week.inputheading}
            </h3>
          </div>
        </div>
      </a>
    </Link>
  );
};
