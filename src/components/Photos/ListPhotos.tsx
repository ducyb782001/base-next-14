"use client"

import { getListPhotos } from "@/api-modules/photos"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import React, { useEffect, useState } from "react"

type GeoLocation = {
  geo: {
    city: string
    country: string
    flag: string
    countryRegion: string
    region: string
    latitude: string
    longitude: string
  }
  ip: string
}

function ListPhotos({ lng }: { lng: string }) {
  const [listPhotos, setListPhotos] = useState<any>()

  useQuery(["getListPhoto"], async () => {
    const response = await getListPhotos()
    setListPhotos(response?.data)
    return response?.data
  })

  const checkIPBeforeAccessApp = async () => {
    try {
      const geoResponse = await fetch("/api/geolocation")
      const geoData: GeoLocation = await geoResponse.json()
      console.log("🚀 ~ checkIPBeforeAccessApp ~ geoData:", geoData)
    } catch (error) {
      console.log("🚀 ~ checkIPBeforeAccessApp ~ error:", error)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      checkIPBeforeAccessApp()
    }
  }, [])

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
