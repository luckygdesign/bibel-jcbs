import { Layout } from "./Layout";

export const Footer = () => {
  return (
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
          <a className="block h-24 sm:h-24" href="https://www.jcbs.de/">
            <img src="/img/jcbslogo.png" className="h-full" alt="JCBS Logo" />
          </a>
        </div>
      </Layout.Container>
    </div>
  );
};
