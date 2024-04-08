"use client"

import { useTranslation } from "@/app/i18n/client"
import React, { useState } from "react"
import PopupTemplate from "./common/PopupTemplate"
import PrimaryBtn from "./common/PrimaryBtn"
import PrimaryInput from "./common/PrimaryInput"

function HomePage({ lng }) {
  const [isShowPopupAddStudent, setIsShowPopupAddStudent] = useState(false)
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
    </div>
  )
}

export default HomePage
