import ListPhotos from "@/components/Photos/ListPhotos"
import React from "react"

export const metadata = {
  title: "Photo List",
}

function page({ params: { lng } }) {
  return <ListPhotos lng={lng} />
}

export default page
