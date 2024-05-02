"use client"

import { Steps } from "antd"
import React from "react"
import {
  SolutionOutlined,
  UserOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons"

function StepSample(props) {
  return (
    <div>
      <div className="text-2xl">Step</div>
      <Steps
        items={[
          {
            title: "Login",
            status: "finish",
            icon: <UserOutlined />,
          },
          {
            title: "Verification",
            status: "finish",
            icon: <SolutionOutlined />,
          },
          {
            title: "Pay",
            status: "process",
            icon: <LoadingOutlined />,
          },
          {
            title: "Done",
            status: "wait",
            icon: <SmileOutlined />,
          },
        ]}
      />
    </div>
  )
}

export default StepSample
