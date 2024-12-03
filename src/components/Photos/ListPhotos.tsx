"use client"

import { getListPhotos } from "@/api-modules/photos"
import { useQuery } from "@tanstack/react-query"
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
  console.log("ListPhotos component rendered")
  useQuery(["getListPhoto"], async () => {
    const response = await getListPhotos()
    setListPhotos(response?.data)
    return response?.data
  })

  const checkIPBeforeAccessApp = async () => {
    try {
      console.log("Before fetch")
      const geoResponse = await fetch("api/geolocation")
      console.log("🚀 ~ checkIPBeforeAccessApp ~ geoResponse:", geoResponse)
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
      <div>Hello</div>
    </div>
  )
}

export default ListPhotos
