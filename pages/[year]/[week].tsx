import { GetStaticProps, GetStaticPaths } from "next";
import { getWeekContent, IWeek, getAllWeeks } from "../../lib/week-query";
import { ParsedMD } from "lib/parseMd";

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
  // Call an external API endpoint to get posts
  //const year1 = getAllWeeks(1)

  // Get the paths we want to pre-render based on posts
  //const paths = year1.map((week) => ({
  //  params: { week: week.week },
  //}))

  const paths = [{ params: { year: "1", week: "1" } }];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};

function WeekPage(pageProps: { page: IWeek }) {
  const { page } = pageProps;
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
            Schulwoche {page?.week}
          </p>
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {page?.heading}
          </h1>
        </div>
        <ParsedMD
          md={page?.body || ""}
          className="rose prose-lg text-gray-500 mx-auto"
        />
      </div>
    </div>
  );
}

export default WeekPage;
