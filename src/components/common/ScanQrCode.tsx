import React, { useEffect, useRef, useState } from "react"
import QrScanner from "qr-scanner"

function ScanQrCode({ isOpenScanQrCode, setIsOpenScanQrCode }) {
  const videoRef = useRef(null)
  const [isScanning, setIsScanning] = useState(false)

  useEffect(() => {
    let scanner
    const startScanner = () => {
      if (videoRef.current) {
        scanner = new QrScanner(
          videoRef.current,
          (result) => {
            console.log("🚀 ~ scanner=newQrScanner ~ result:", result)
          },
          {
            onDecodeError: (error) => console.log("QR scan error", error),
          },
        )
        scanner
          .start()
          .catch((err) => console.error("Scanner start error:", err))
      } else {
        console.error("Video element not found")
      }
    }
    if (isOpenScanQrCode) {
      setIsScanning(true)
      setTimeout(startScanner, 100)
    }
    return () => {
      if (scanner) {
        scanner.stop()
      }
    }
  }, [isOpenScanQrCode])

  return (
    <div className="relative h-screen md:h-[600px] overflow-hidden text-white">
      {isScanning ? (
        <video
          ref={videoRef}
          className="absolute top-[2px] left-[2px] w-full h-full object-cover rounded-lg"
          autoPlay
          muted
          playsInline
        />
      ) : (
        <div className="w-full h-full bg-secondBackground" />
      )}
      <div className="absolute top-5 bottom-5 left-5 right-5">
        {/* <div className="flex items-center justify-between">
                <TButton
                  type={ButtonType.ICON}
                  onClick={() => {
                    setIsScanning(false)
                    setIsOpenScanQrCode(false)
                  }}
                >
                  <ArrowLeftIcon />
                </TButton>
                <TextContent className="font-semibold" type={ContentType.TITLE}>
                  Scan QR Code
                </TextContent>
                <div className="w-8 h-8" />
              </div> */}
        <div className="flex flex-col items-center mt-20">
          <div className="relative rounded-lg w-52 h-52 qr-code-scanning">
            <div className="absolute top-[-2px] left-[-2px] w-12 h-12 border-t-[3px] border-l-[3px] rounded-tl-[20px]"></div>
            <div className="absolute top-[-2px] right-[-2px] w-12 h-12 border-t-[3px] border-r-[3px] rounded-tr-[20px]"></div>
            <div className="absolute bottom-[-2px] left-[-2px] w-12 h-12 border-b-[3px] border-l-[3px] rounded-bl-[20px]"></div>
            <div className="absolute bottom-[-2px] right-[-2px] w-12 h-12 border-b-[3px] border-r-[3px] rounded-br-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScanQrCode
