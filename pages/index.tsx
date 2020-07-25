import { Layout } from "components/Layout";
import { Footer } from "components/Footer";
import Link from "next/link";

function StartPage() {
  return (
    <Layout>
      <div
        className="h-64 bg-center bg-cover"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1499652848871-1527a310b13a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80)`,
        }}
      ></div>

      <Layout.Container>
        <div className="text-lg max-w-prose mx-auto mb-6">
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Willkommen beim JCBS Bibellernversprogramm
          </h1>
        </div>
        <div className="my-12">
          <div className="prose prose-lg text-gray-500 mx-auto text-center">
            <p>
              Die Bibel ist das meistgelesene, meistverkaufte und
              meistübersetzte Buch der Welt. Die Bibel (AT/NT) kann bereits in
              694 Sprachen vollständig gelesen warden, in ca. 4.400 Sprache
              liegen zumindest Teilübersetzungen vor. Etwa 5,7 Milliarden
              Menschen haben einen Zugang zur Bibel. Laut der Deutschen
              Bibelgesellschaft gibt es die Bibel für Gehörlose sogar in bereits
              245 Zeichensprachen. In der Geschichte gaben viele Menschen für
              dieses Buch ihr Leben. Es gibt kein anderes Buch, über das so viel
              diskutiert und um das so viel gekämpft wurde und wird. Das kommt
              daher, dass jeder, der mit der Bibel in Berührung kommt, Stellung
              beziehen muss – denn Gott selbst ist der Autor! Welches andere
              Buch könnte das von sich behaupten?
            </p>
            <p>
              Die Bibel wurde über einen Zeitraum von 1.400 Jahren hinweg
              verfasst. Über 40 Autoren sind an der Bibel beteiligt. Es waren
              unterschiedliche Menschen wie z.B. Könige, Philosophen, Dichter,
              Historiker, Ärzte und Fischer. Einige schrieben in Gedichtform,
              andere durch einfache Briefe oder in Form von Prophetie. Wenn wir
              akzeptieren, dass die Bibel von Gott inspiriert ist, dann hat sie
              auch eine hohe Autorität. Wenn sie Gottes Wort ist, dann wird sie
              die höchste Instanz für unseren Glauben und unser Handeln sein.
              Als christliche Bekenntnisschule ist für uns die Bibel
              wesentlicher Orientierungspunkt. Wir wollen dir die Möglichkeit
              bieten, dass du dir diese Worte Gottes einprägst. Sie können dich
              ein Leben lang begleiten und Hilfe sein.
            </p>
            <p>
              Dieses Begleitheft will dich herausfordern, dich aber auch dabei
              unterstützen, die jeweiligen Wochenlernverse zu verinnerlichen.
              Lass dich ermutigen, mit diesem Heft zu arbeiten, die Fragen für
              dich ganz persönlich zu beantworten und die “Outputs | Challenges”
              an- und aufzunehmen.
            </p>
            <p>
              Wir wünschen dir viel Freude und Segen beim Lernen dieser Worte
              und beim praktischen Leben mit ihnen!
            </p>
            <p>Reinhard Wurster & Valentin Damm</p>
          </div>
        </div>
      </Layout.Container>
      <div className="bg-gray-200">
        <Layout.Container>
          <YearUebersicht />
        </Layout.Container>
      </div>

      <Footer />
    </Layout>
  );
}

export default StartPage;

const YearUebersicht = () => {
  return (
    <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      <YearItem year="1" />
    </div>
  );
};

const YearItem = ({ year }: { year: string }) => {
  return (
    <Link href="/[year]" as={`/${year}`}>
      <a className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              Jahr {year}
            </h3>
          </div>
        </div>
      </a>
    </Link>
  );
};
