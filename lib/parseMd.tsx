import marked from "marked";

export function parseMd(md: string) {
  return marked(md);
}

interface IParseMd extends React.HTMLAttributes<HTMLDivElement> {
  md: string;
}

export const ParsedMD = ({ md, className, children, ...others }: IParseMd) => {
  return (
    <div
      className={[className, ""].join(" ")}
      dangerouslySetInnerHTML={{ __html: parseMd(md) }}
      {...others}
    ></div>
  );
};
