"use client"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ConfigProvider } from "antd"
import { ToastContainer } from "react-toastify"
import { ViewTransitions } from "next-view-transitions"

// Create a react query client
const queryClient = new QueryClient({
  defaultOptions: {
    // react query stop refetch when switch browser tabs
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#00b96b",
            borderRadius: 5,

            // Alias Token
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <ViewTransitions>{children}</ViewTransitions>
          </QueryClientProvider>
        </ThemeProvider>
      </ConfigProvider>
    </>
  )
}
