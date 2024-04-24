import { languages } from "@/app/i18n/settings"
import MainLayout from "@/components/common/MainLayout"

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({ children, params: { lng } }) {
  return <MainLayout lng={lng}>{children}</MainLayout>
}
