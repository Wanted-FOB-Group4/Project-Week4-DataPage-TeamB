import { AxiosResponse } from 'axios'

export const setDelay = (ms: number) => {
  return (x: AxiosResponse) => {
    return new Promise<AxiosResponse>((resolve) => {
      setTimeout(() => resolve(x), ms)
    })
  }
}
