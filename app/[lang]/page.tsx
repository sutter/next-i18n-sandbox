import Link from "next/link"
import { Tile } from "../components/Tile"
import { useTranslation } from "../i18n"
import { languages } from "../i18n/settings"

const HomePage = async ({
  params,
}: {
  params: { lang: "en" | "fr"; slug: string }
}) => {
  const { lang } = params
  const { t } = await useTranslation(lang)
  return (
    <main className="py-24">
      <div className="container mx-auto">
        <div>lang - {lang}</div>
        <h1 className="text-2xl font-bold mb-12">{t("title")}</h1>
        <Tile lang={lang} />
        <div className="mt-12">
          {languages.map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && " / "}
                <Link href={`/${l}`} className="text-indigo-500 underline">
                  {l}
                </Link>
              </span>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default HomePage
