import { IAdData } from 'types/ads'
import { AxiosResponse } from 'axios'

export const setFetchDelay = (ms: number) => {
  return (x: AxiosResponse) => {
    return new Promise<AxiosResponse>((resolve) => {
      setTimeout(() => resolve(x), ms)
    })
  }
}

export const setFetchDelayPromise = (ms: number) => {
  return (x: IAdData) => {
    return new Promise<IAdData>((resolve) => {
      setTimeout(() => resolve(x), ms)
    })
  }
}
