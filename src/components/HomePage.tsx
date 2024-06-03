"use client"

import { useTranslation } from "@/app/i18n/client"
import React, { useState } from "react"
import PopupTemplate from "./common/PopupTemplate"
import Select from "react-select"
import Link from "next/link"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

function HomePage({ lng }) {
  const [isShowPopupAddStudent, setIsShowPopupAddStudent] = useState(false)
  const [selectedOption, setSelectedOption] = useState<any>()

  const { t } = useTranslation(lng, "common")
  return (
    <div>
      <div
        onClick={() => {
          setIsShowPopupAddStudent(true)
        }}
        className="text-secondary dark:text-textDark"
      >
        {t("title")}
      </div>
      <PopupTemplate
        setShowDialog={setIsShowPopupAddStudent}
        showDialog={isShowPopupAddStudent}
        title="Add subject"
        classNameWrapper="md:!min-w-[486px]"
      >
        <div className="text-secondary dark:text-textDark">Popup here</div>
      </PopupTemplate>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className="w-[600px]"
        isMulti
      />
      Code sanbox compile:
      <Link
        href={
          "https://codesandbox.io/p/sandbox/formik-2-with-react-select-2-and-3-example-73jj9zom96?file=%2Findex.js%3A138%2C39"
        }
        target="_blank"
      >
        react select with useFormik
      </Link>
    </div>
  )
}

export default HomePage
