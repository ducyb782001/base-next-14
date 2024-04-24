import React from "react"

function VnFlagIcon(props) {
  return (
    <svg
      width={20}
      height={15}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="a"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={-1}
        width={20}
        height={17}
      >
        <path d="M0 0h20v15H0V0z" fill="#fff" />
      </mask>
      <g mask="url(#a)" fillRule="evenodd" clipRule="evenodd">
        <path d="M-1.251 0H21.25v15H-1.251V0z" fill="#EC0015" />
        <path
          d="M12.742 11.162l-2.625-1.954L7.51 11.18l.967-3.211L5.87 5.985l3.226-.03 1.002-3.205 1.016 3.197 3.226.003-2.593 2.004.993 3.211.003-.003z"
          fill="#FF0"
        />
      </g>
    </svg>
  )
}

export default VnFlagIcon
