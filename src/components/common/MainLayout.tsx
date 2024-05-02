"use client"

import React from "react"
import HorizontalNav from "../HorizontalNav"

function MainLayout({ lng, children }) {
  return (
    <div>
      <HorizontalNav lng={lng} />
      {/* <MainNav lng={lng} /> */}

      <div className="min-w-full min-h-screen md:pt-20 pt-[60px] md:pl-[100px] text-black bg-bgPrimary dark:bg-bgDarkSecondary">
        <div className={`px-4 pb-10`}>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
