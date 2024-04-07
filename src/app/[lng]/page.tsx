import MainLayout from "@/components/common/MainLayout"
import HomePage from "@/components/HomePage"

export default async function Page({ params: { lng } }) {
  return (
    <MainLayout lng={lng}>
      <HomePage lng={lng} />
      {/* <Footer lng={lng} /> */}
    </MainLayout>
  )
}
