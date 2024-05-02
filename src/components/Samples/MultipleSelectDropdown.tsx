"use client"

import { Cascader } from "antd"
import { MultipleCascaderProps } from "antd/es/cascader"
import React from "react"

interface Option {
  value: string | number
  label: string
  children?: Option[]
  disableCheckbox?: boolean
}

const options: Option[] = [
  {
    label: "Light",
    value: "light",
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number ${index}`, value: index })),
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Toy Fish",
            value: "fish",
            disableCheckbox: true,
          },
          {
            label: "Toy Cards",
            value: "cards",
          },
          {
            label: "Toy Bird",
            value: "bird",
          },
        ],
      },
    ],
  },
]
const onChange: MultipleCascaderProps<Option>["onChange"] = (value) => {
  console.log(value)
}

function MultipleSelectDropdown(props) {
  return (
    <div>
      <div className="text-2xl">Multiple Select Dropdown</div>
      <Cascader
        style={{ width: "100%" }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
      />
    </div>
  )
}

export default MultipleSelectDropdown
