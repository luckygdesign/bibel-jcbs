import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { getWeekContent, IWeek, getAllWeeks } from "../../lib/week-query";

export const getStaticProps: GetStaticProps = async (context) => {
  const { year, week } = context.params;

  return {
    props: {
      page: await getWeekContent(year as string, week as string),
    },
  };
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  //const year1 = getAllWeeks(1)

  // Get the paths we want to pre-render based on posts
  //const paths = year1.map((week) => ({
  //  params: { week: week.week },
  //}))

  const paths = [
    //{params: {year: '1', week: '1'}}
  ];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}
function WeekPage(pageProps: { page: IWeek }) {
  const { page } = pageProps;
  return (
    <div>
      <h1>{page?.heading}</h1>
      <p>{page?.link}</p>
    </div>
  );
}

export default WeekPage;
