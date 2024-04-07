import { todoUrl } from "@/constants/apiUrls"
import { convertObjectToQueryString, requestAPI } from "@/lib/api"

export const getListTodos = (paramsObj) => {
  const queryString = convertObjectToQueryString(paramsObj)
  return requestAPI({
    url: `${todoUrl}${queryString}`,
  })
}
