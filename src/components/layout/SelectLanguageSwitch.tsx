"use client"

import React, { useState, useEffect } from "react"
import EnFlagIcon from "../icons/EnFlagIcon"
import VnFlagIcon from "../icons/VnFlagIcon"
import Link from "next/link"
import { usePathname } from "next/navigation"

const LIST_LANGUAGE_SUPPORTED = [
  { id: 1, name: "EN", code: "en", logo: <EnFlagIcon /> },
  { id: 2, name: "VI", code: "vi", logo: <VnFlagIcon /> },
]

function SelectLanguageSwitch({ lng }) {
  const [selectedLanguage, setSelectedLanguage] = useState<any>()

  useEffect(() => {
    if (lng) {
      const curerntLanguage = LIST_LANGUAGE_SUPPORTED.find(
        (language) => language.code === lng,
      )

      setSelectedLanguage(curerntLanguage)
    }
  }, [lng])

  const pathname = usePathname()
  const newPathName = `/${lng === "en" ? "vi" : "en"}/${pathname.substring(4)}`

  return (
    <Link
      href={newPathName}
      className="w-fit flex items-center h-full cursor-pointer rounded-lg smooth-transform px-[6px] py-[4px] md:px-4 md:py-3 bg-[#AAAAAA26] hover:bg-[#AAAAAA46] focus:bg-[#AAAAAA46]"
    >
      {selectedLanguage?.logo}
      <p className="ml-1 mr-2 text-sm font-medium text-black">
        {selectedLanguage?.name}
      </p>
    </Link>
  )
}

export default SelectLanguageSwitch
