import axios from "axios"
import cookie from "cookie"
import { processDataLogin } from "./processDataLogin"
import { refreshAccessTokenUrl } from "@/constants/apiUrls"

// optionaly add base url for axios

const client = axios.create({
  url: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
  },
})

export const refreshAccessToken = () => {
  const cookies = cookie.parse(window?.document.cookie)

  const onSuccess = (response) => {
    const data = response?.data
    processDataLogin(data)
  }

  const onError = (error) => {
    // optionaly catch errors and add some additional logging here
    return error
  }

  const payload = {
    refreshToken: cookies.refreshToken,
  }

  if (cookies.refreshToken && !cookies.accessToken) {
    client({ method: "post", url: refreshAccessTokenUrl, data: payload })
      .then(onSuccess)
      .catch(onError)
  }
}

export const requestAPI = ({ ...options }) => {
  refreshAccessToken()
  const cookies = cookie.parse(window?.document.cookie)

  if (cookies.accessToken) {
    client.defaults.headers.common.Authorization = `Bearer ${
      cookies.accessToken || ""
    }`
  }

  const onSuccess = (response) => response
  const onError = (error) => {
    // optionaly catch errors and add some additional logging here
    return error
  }

  return client(options).then(onSuccess).catch(onError)
}

export const postAPI = ({ ...options }) => {
  refreshAccessToken()
  const cookies = cookie.parse(window?.document.cookie)

  if (cookies.accessToken) {
    client.defaults.headers.common.Authorization = `Bearer ${
      cookies.accessToken || ""
    }`
  }

  const onSuccess = (response) => response
  const onError = (error) => {
    // optionaly catch errors and add some additional logging here
    return error
  }

  return client({ method: "post", ...options })
    .then(onSuccess)
    .catch(onError)
}

export const patchAPI = ({ ...options }) => {
  refreshAccessToken()
  const cookies = cookie.parse(window?.document.cookie)

  if (cookies.accessToken) {
    client.defaults.headers.common.Authorization = `Bearer ${
      cookies.accessToken || ""
    }`
  }

  const onSuccessPath = (response) => response
  const onErrorPath = (error) => {
    // optionaly catch errors and add some additional logging here
    return error
  }

  return client({ method: "patch", ...options })
    .then(onSuccessPath)
    .catch(onErrorPath)
}

export const deleteAPI = ({ ...options }) => {
  refreshAccessToken()
  const cookies = cookie.parse(window?.document.cookie)

  if (cookies.accessToken) {
    client.defaults.headers.common.Authorization = `Bearer ${
      cookies.accessToken || ""
    }`
  }

  const onSuccessDelete = (response) => response
  const onErrorDelete = (error) => {
    // optionaly catch errors and add some additional logging here
    return error
  }

  return client({ method: "delete", ...options })
    .then(onSuccessDelete)
    .catch(onErrorDelete)
}

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
