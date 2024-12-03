import { Link } from "next-view-transitions"
import React from "react"

function AboutPage(props) {
  console.log("AboutPage component rendered")
  return (
    <div>
      <Link href={"/sample"}>Go to sample</Link>
    </div>
  )
}

export default AboutPage
