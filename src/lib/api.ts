import axios from "axios"
import cookie from "cookie"
import { processDataLogin } from "./processDataLogin"
import { refreshAccessTokenUrl } from "@/constants/apiUrls"
import createAuthRefreshInterceptor from "axios-auth-refresh"
import { DEPOSIT_GUIDE_KEY } from "@/constants/constants"

const client = axios.create({
  url: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_DGG_API_KEY,
  },
})

client.interceptors.request.use(
  (request) => {
    const cookies = cookie.parse(window?.document.cookie)
    const acceptLanguage = localStorage.getItem("i18nextLng")
    if (cookies.accessToken) {
      request.headers["Authorization"] = `Bearer ${cookies.accessToken}`
    }
    if (acceptLanguage) {
      request.headers["Accept-Language"] = acceptLanguage
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const requestAPI = async ({ ...options }) => {
  const onSuccess = (response) => response
  const onError = async (error) => {
    if (error?.response?.status === 404) {
      window.location.href = "/404"
    }
    return error
  }
  return client.get(options.url).then(onSuccess).catch(onError)
}

export const postAPI = async ({ ...options }) => {
  const onSuccess = (response) => response
  const onErrorPost = async (error) => {
    return error
  }

  return client
    .post(options.url, options?.data)
    .then(onSuccess)
    .catch(onErrorPost)
}

export const patchAPI = async ({ ...options }) => {
  const onSuccessPath = (response) => response
  const onErrorPath = (error) => {
    // optionaly catch errors and add some additional logging here
    return error
  }

  return client
    .patch(options.url, options?.data)
    .then(onSuccessPath)
    .catch(onErrorPath)
}

export const deleteAPI = async ({ ...options }) => {
  const onSuccessDelete = (response) => response
  const onErrorDelete = (error) => {
    // optionaly catch errors and add some additional logging here
    return error
  }

  return client({ method: "delete", ...options })
    .then(onSuccessDelete)
    .catch(onErrorDelete)
}

const refreshAuthLogic = async () => {
  const cookies = cookie.parse(window?.document.cookie)

  const onSuccess = (response) => {
    const data = response?.data
    processDataLogin(data)
  }

  const onError = (error) => {
    const keysToRemove = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key !== DEPOSIT_GUIDE_KEY) {
        keysToRemove.push(key)
      }
    }
    keysToRemove.forEach((key) => {
      localStorage.removeItem(key)
    })
    window.document.cookie = cookie.serialize("accessToken", "", {
      maxAge: -1,
      path: "/",
    })
    window.document.cookie = cookie.serialize("refreshToken", "", {
      maxAge: -1,
      path: "/",
    })
    window.location.href = "/"

    // optionaly catch errors and add some additional logging here
    return error
  }

  const payload = {
    refreshToken: cookies.refreshToken,
  }

  if (cookies.refreshToken) {
    try {
      const response = await client({
        method: "post",
        url: refreshAccessTokenUrl,
        data: payload,
      })
      onSuccess(response)
    } catch (error) {
      onError(error)
    }
  }
}

createAuthRefreshInterceptor(client, refreshAuthLogic)

/**
 * Convert a flat object to a query string
 * @param parameters A flat object
 * @param prefix Defaults to '?'
 */

export const convertObjectToQueryString = (
  parameters: { [key: string]: any } = {},
  prefix = "?",
): string => {
  const query: string = Object.keys(parameters)
    .map((key: string) => {
      let value = parameters[key]

      if (typeof value === "boolean") value = value ? 1 : 0

      return encodeURIComponent(key) + "=" + encodeURIComponent(value)
    })
    .join("&")

  return prefix + query
}
