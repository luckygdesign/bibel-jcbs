import { GetStaticProps, GetStaticPaths } from "next";
import { getWeekContent, IWeek, getAllWeeks } from "../../lib/week-query";
import { ParsedMD } from "lib/parseMd";
import ReactPlayer from "react-player";
import { Layout } from "components/Layout";
import { getAllYears } from "lib/year-query";
import { ParsedUrlQuery } from "querystring";
import { Footer } from "components/Footer";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      page: await getWeekContent(
        params?.year as string,
        params?.week as string
      ),
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
    year.map((week) =>
      paths.push({
        params: { year: week.year, week: week.woche },
      })
    )
  );

  return { paths, fallback: false };
};

function WeekPage(pageProps: { page: IWeek }) {
  const { page } = pageProps;
  return (
    <Layout>
      <div
        className="h-64 bg-center bg-cover"
        style={{ backgroundImage: `url(${page.image})` }}
      >
        <Layout.Container>
          <div>
            <Link href="/[year]" as={`/${page?.year}`}>
              <a className="inline-flex rounded-md shadow-sm">
                <span className="inline-flex justify-center py-2 px-4 border border-white text-sm leading-5 font-medium rounded-md text-white hover:border-gray-200 hover:text-gray-200 focus:outline-none focus:border-gray-200 focus:shadow-outline-white transition duration-150 ease-in-out">
                  Zur Übersicht
                </span>
              </a>
            </Link>
          </div>
        </Layout.Container>
      </div>

      <Layout.Container>
        <div className="text-lg max-w-prose mx-auto mb-6">
          <p className="text-base text-center leading-6 text-accent-600 font-semibold tracking-wide uppercase">
            Jahr {page?.year} | Schulwoche {page?.woche}
          </p>
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {page?.inputheading}
          </h1>
        </div>
        <div className="my-12">
          <ParsedMD
            md={page?.versetext || ""}
            className="prose text-2xl text-medium text-gray-600 mx-auto text-center"
          />
          <p className="text-base text-center leading-6 text-accent-600 mt-6">
            {page?.versestelle}
          </p>
        </div>
        {/*<ParsedMD
          md={page?.body || ""}
          className="prose prose-lg text-gray-500 mx-auto text-center"
        />*/}
      </Layout.Container>
      <div className="bg-gray-200">
        <Layout.Container>
          <h3 className="mt-2 mb-8 text-xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {page?.challengeheading}
          </h3>
          <ParsedMD
            md={page?.challengebody || ""}
            className="prose prose-lg text-gray-500 mx-auto text-center"
          />
          {page?.video && (
            <div
              className="mt-9"
              style={{ paddingTop: "56.25%", position: "relative" }}
            >
              <ReactPlayer
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
                url={page.video}
              />
            </div>
          )}
        </Layout.Container>
      </div>

      <Footer />
    </Layout>
  );
}

export default WeekPage;
