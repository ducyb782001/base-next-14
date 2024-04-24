import { photoUrl } from "@/constants/apiUrls"
import { requestAPI } from "@/lib/api"

export const getPhotoDetail = (id) => {
  return requestAPI({
    url: `${photoUrl}/${id}`,
  })
}

export const getListPhotos = () => {
  return requestAPI({
    url: `${photoUrl}`,
  })
}
