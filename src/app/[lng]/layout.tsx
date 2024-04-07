import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientProviders from "@/providers"
import { dir } from "i18next"
import { languages } from "../i18n/settings"

//CSS Style
import "../style/globals.css"
import "react-toastify/dist/ReactToastify.css"
import "@reach/dialog/styles.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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