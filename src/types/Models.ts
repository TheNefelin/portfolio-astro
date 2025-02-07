export interface ApiResult<T> {
  isSucces: boolean
  statusCode: number
  message: string
  data: T
}

export interface Project {
  id: number
  name: string
  imgUrl: string
  repoUrl: string
  appUrl: string
  languages: Language[]
  technologies: Technology[]
}

export interface Language {
  id: number
  name: string
  imgUrl: string
}

export interface Technology {
  id: number
  name: string
  imgUrl: string
}

export interface UrlGrp {
  id: number,
  name: string,
  isEnable: boolean,
  urls: Url[]
}

export interface Url {
  id: number,
  name: string,
  url: string,
  isEnable: boolean
}