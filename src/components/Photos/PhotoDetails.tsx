"use client"

import { getPhotoDetail } from "@/api-modules/photos"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import React, { useState } from "react"

function PhotoDetails({ lng }: { lng: string }) {
  const [photoDetail, setPhotoDetail] = useState<any>()
  const { id } = useParams()
  useQuery(
    ["getListPhoto", id],
    async () => {
      if (id) {
        const response = await getPhotoDetail(id)
        setPhotoDetail(response?.data)
        return response?.data
      }
    },
    { enabled: !!id },
  )

  return (
    <div>
      <div>
        {photoDetail?.id} - {photoDetail?.title}
      </div>
      <img src={photoDetail?.thumbnailUrl} />
      <img src={photoDetail?.url} />
    </div>
  )
}

export default PhotoDetails
