import PhotoDetails from "@/components/Photos/PhotoDetails"
import { photoUrl } from "@/constants/apiUrls"
import { Metadata, ResolvingMetadata } from "next"
import React from "react"

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id
  const photo = await fetch(`${photoUrl}/${id}`).then((res) => res.json())

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: photo.title,
    openGraph: {
      images: [photo?.url, ...previousImages],
    },
  }
}

export default function page({ params: { lng } }) {
  return <PhotoDetails lng={lng} />
}
