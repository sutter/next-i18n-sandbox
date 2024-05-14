"use client"

import { useTranslation } from "../i18n/client"

export const Tile = ({ lang }: { lang: "fr" | "en" }) => {
  const { t } = useTranslation(lang, "tile", undefined)
  return (
    <div className="border p-4">
      <h1 className="text-lg font-bold mb-2">{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  )
}
