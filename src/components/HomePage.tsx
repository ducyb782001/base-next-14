"use client"

import { useTranslation } from "@/app/i18n/client"
import React, { useState } from "react"
import PopupTemplate from "./common/PopupTemplate"
import Select from "react-select"
import Link from "next/link"
import { Walktour, Step, WalktourLogic } from "walktour"

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
        id="step-one"
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
        id="step-two"
        href={
          "https://codesandbox.io/p/sandbox/formik-2-with-react-select-2-and-3-example-73jj9zom96?file=%2Findex.js%3A138%2C39"
        }
        target="_blank"
      >
        react select with useFormik
      </Link>
      <div className="h-[800px] bg-red-500">Long place</div>
      <div id="step-three">Trung Duc dep try</div>
      <Walktour
        steps={[
          {
            selector: "#step-one",
            title: "First Steps",
            description: "One foot in front of the other",
          },
          {
            selector: "#step-two",
            title: "Second Steps",
            description: "react select with useFormik",
          },
          {
            selector: "#step-three",
            title: "Second Steps",
            description: "Trung Duc dep try",
          },
        ]}
      />
    </div>
  )
}

export default HomePage
