"use client"

import { useTranslation } from "@/app/i18n/client"
import React from "react"

function HomePage({ lng }) {
  const { t } = useTranslation(lng, "common")
  return (
    <div>
      <div className="text-secondary dark:text-textDark">{t("title")}</div>
    </div>
  )
}

export default HomePage
