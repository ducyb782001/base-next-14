"use client"

import Link from "next/link"
import React, { useState } from "react"
import useMultiLanguage from "@/hooks/useMultiLanguage"
import { useThemeContext } from "@/contexts/ThemeContext"
import DropDownLanguage from "./layout/DropDownLanguage"
import DarkModeSwitcher from "./layout/DarkModeSwitcher"
import SelectLanguageSwitch from "./layout/SelectLanguageSwitch"

function HorizontalNav({ lng }) {
  const { currentLang } = useMultiLanguage()
  const [languageSelected, setLanguageSelected] = useState<any>()
  const { currentTheme } = useThemeContext()

  return (
    <div className="fixed top-0 w-full gap-2 pl-[7px] right-0 hidden items-center z-30 dark:bg-bgDark justify-between bg-white md:flex">
      <Link
        href={`/${currentLang}`}
        className="pr-5 pl-4 py-[15px] dark:text-textDark"
      >
        Logo
      </Link>
      <div className={`mr-4  w-full flex justify-end items-center gap-5`}>
        <SelectLanguageSwitch lng={lng} />
        <DarkModeSwitcher />
      </div>
    </div>
  )
}

export default HorizontalNav
