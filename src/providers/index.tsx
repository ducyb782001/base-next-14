"use client"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"

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
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
