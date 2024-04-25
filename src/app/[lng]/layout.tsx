import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientProviders from "@/providers"
import { dir } from "i18next"
import { languages } from "../i18n/settings"

//CSS Style
import "../style/globals.css"
import "react-toastify/dist/ReactToastify.css"
import "@reach/dialog/styles.css"
// import "antd/dist/antd.css"

const inter = Inter({ subsets: ["latin"] })

const META_DATA = {
  TITLE: "DG Pub. Decentralized Gateway to the Public",
  DESCRIPTION:
    "DG Pub - Your gateway to Web3! Discover, learn, and connect with the decentralized world. Get guidance, resources, and support all in one user-friendly app.",
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

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
