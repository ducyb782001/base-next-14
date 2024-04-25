import ListSampleComponent from "@/components/Samples/ListSampleComponent"
import { Metadata } from "next"

const META_DATA = {
  TITLE: "Sample component",
  DESCRIPTION:
    "This is sample component of code base, with antd component and custom by tailwind css",
  IMAGE: "/images/thumbnail.png",
  URL: "https://dg.pub/",
}

export const metadata: Metadata = {
  title: META_DATA.TITLE,
  description: META_DATA.DESCRIPTION,
  metadataBase: new URL(META_DATA.URL),
  openGraph: {
    title: META_DATA.TITLE,
    description: META_DATA.DESCRIPTION,
    images: META_DATA.IMAGE,
  },
  twitter: {
    title: META_DATA.TITLE,
    description: META_DATA.DESCRIPTION,
    images: META_DATA.IMAGE,
    card: "summary_large_image",
  },
}

export default function page({ params: { lng } }) {
  return <ListSampleComponent lng={lng} />
}
