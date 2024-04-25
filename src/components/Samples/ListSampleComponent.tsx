"use client"

import { Button } from "antd"
import React, { useState } from "react"
import LightModeIcon from "../icons/LightModeIcon"
import { SearchOutlined, PoweroffOutlined } from "@ant-design/icons"

function ListSampleComponent({ lng }: { lng: string }) {
  const [loadings, setLoadings] = useState<boolean[]>([])

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings]
      newLoadings[index] = true
      return newLoadings
    })

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings]
        newLoadings[index] = false
        return newLoadings
      })
    }, 3000)
  }

  return (
    <div>
      <div className="text-2xl">Button</div>
      <div className="flex items-center gap-3">
        <Button className="flex items-center gap-2" size="large" type="primary">
          <LightModeIcon color="#ffffff" />
          <div>Primary Button</div>
        </Button>
        <Button size="large" type="default" icon={<SearchOutlined />}>
          Default Button
        </Button>
        <Button
          size="large"
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Click me!
        </Button>
        <Button
          size="large"
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
          danger
        />
      </div>
    </div>
  )
}

export default ListSampleComponent
