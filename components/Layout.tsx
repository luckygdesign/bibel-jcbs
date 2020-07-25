export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className="bg-white">{children}</div>;
};

Layout.Container = ({
  children,
  flat = false,
}: React.PropsWithChildren<{ flat?: boolean }>) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${
        !flat && "py-12 lg:py-16"
      }`}
    >
      {children}
    </div>
  );
};
