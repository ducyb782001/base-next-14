"use client"

import { getListPhotos } from "@/api-modules/photos"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import React, { useState, useTransition } from "react"

function ListPhotos({ lng }: { lng: string }) {
  const [listPhotos, setListPhotos] = useState<any>()

  useQuery(["getListPhoto"], async () => {
    const response = await getListPhotos()
    setListPhotos(response?.data)
    return response?.data
  })

  return (
    <div>
      <div>ListPhotos</div>
      <div>Loading...</div>
      <div className="flex flex-col gap-3">
        {listPhotos?.map((item) => (
          <div key={item?.id}>
            <Link href={`/photos/${item?.id}`}>
              ID: {item?.id} - title: {item?.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListPhotos
