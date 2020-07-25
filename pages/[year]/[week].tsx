import { GetStaticProps, GetStaticPaths } from "next";
import { getWeekContent, IWeek, getAllWeeks } from "../../lib/week-query";
import { ParsedMD } from "lib/parseMd";
import ReactPlayer from "react-player";
import { Layout } from "components/Layout";

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
  const year1 = await getAllWeeks("1");

  // Get the paths we want to pre-render based on posts
  const paths = year1.map((week) => ({
    params: { year: "1", week: week.woche },
  }));

  //const paths = [{ params: { year: "1", week: "1" } }];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

function WeekPage(pageProps: { page: IWeek }) {
  const { page } = pageProps;
  return (
    <Layout>
      <Layout.Container>
        <div className="text-lg max-w-prose mx-auto mb-6">
          <p className="text-base text-center leading-6 text-accent-600 font-semibold tracking-wide uppercase">
            Jahr {page?.year} | Schulwoche {page?.woche}
          </p>
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {page?.inputheading}
          </h1>
        </div>
        <ParsedMD
          md={page?.body || ""}
          className="prose prose-lg text-gray-500 mx-auto text-center"
        />
      </Layout.Container>
      <div className="bg-gray-200">
        <Layout.Container>
          <h3 className="mt-2 mb-8 text-xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Challenge
          </h3>
          <p className="prose prose-lg text-gray-500 mx-auto text-center">
            Schau dir das Video an und denke darüber nach, wozu Gott alles Leben
            auf dieser Erde geschaffen hat und was er mit dir persönlich vorhat!
          </p>
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

      <div className="bg-gray-800">
        <Layout.Container>
          <div className="flex space-y-6 flex-col sm:flex-row-reverse sm:space-y-0 justify-between">
            <div className="flex flex-col space-y-4 sm:text-right mt-0">
              <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                Du willst mehr wissen?
              </h4>
              <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                Oder einfach jemanden, der dir zuhört?
              </h4>
              <p className="text-sm leading-5 font-semibold text-gray-400">
                Melde dich bei Valentin Damm!
              </p>
            </div>
            <div className="h-24 sm:h-24">
              <img src="/img/jcbslogo.png" className="h-full" alt="JCBS Logo" />
            </div>
          </div>
        </Layout.Container>
      </div>
    </Layout>
  );
}

export default WeekPage;
