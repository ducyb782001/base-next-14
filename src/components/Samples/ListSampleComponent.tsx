"use client"

import {
  Breadcrumb,
  Button,
  Dropdown,
  FloatButton,
  MenuProps,
  Space,
  Switch,
} from "antd"
import React, { useState } from "react"
import LightModeIcon from "../icons/LightModeIcon"
import {
  SearchOutlined,
  PoweroffOutlined,
  CustomerServiceOutlined,
  CommentOutlined,
  HomeOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons"
import MenuSample from "./MenuSample"
import StepSample from "./StepSample"
import { Link } from "next-view-transitions"
import UploadImageFile from "./UploadImageFile"

function ListSampleComponent({ lng }: { lng: string }) {
  const [loadings, setLoadings] = useState<boolean[]>([])
  const [openListFloatBtn, setOpenListFloatBtn] = useState(true)

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
  const onChangeFloatBtn = (checked: boolean) => {
    setOpenListFloatBtn(checked)
  }

  return (
    <div className="flex flex-col gap-10 pb-20">
      <Link href={"/about"}>Go to about</Link>
      <div>
        <div className="text-2xl">Button</div>
        <div className="flex items-center gap-3">
          <Button
            className="flex items-center gap-2"
            size="large"
            type="primary"
          >
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
      <div>
        <div className="text-2xl">Float button</div>
        <FloatButton.Group
          onClick={() => {
            setOpenListFloatBtn(!openListFloatBtn)
          }}
          open={openListFloatBtn}
          trigger="click"
          style={{ right: 24 }}
          icon={<CustomerServiceOutlined />}
          tooltip="Click to action"
          shape="circle"
        >
          <FloatButton />
          <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>
        <Switch onChange={onChangeFloatBtn} checked={openListFloatBtn} />
        <FloatButton.BackTop style={{ right: 24 + 64 }} />
      </div>
      <div>
        <div className="text-2xl">Breadcrumb</div>
        <Breadcrumb
          items={[
            {
              href: "",
              title: <HomeOutlined />,
            },
            {
              href: "",
              title: (
                <>
                  <UserOutlined />
                  <span>Application List</span>
                </>
              ),
            },
            {
              title: "Application",
            },
          ]}
        />
      </div>
      <div>
        <div className="text-2xl">Dropdown</div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <MenuSample />
      <StepSample />
      <UploadImageFile/>
    </div>
  )
}

export default ListSampleComponent

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
]
