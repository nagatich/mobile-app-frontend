import queryString from 'query-string'

import { request } from '../request'

interface Data {
  model: string
  generation: number
  query: string
  engineFuel?: string
  engineVolume?: number
  city?: number
}

const transformData = (data: Data) => ({
  model: data.model,
  generation: data.generation,
  query: data.query,
  engine_fuel: data.engineFuel,
  engine_volume: data.engineVolume,
  city: data.city,
})

export const query = async (data: Data) => {
  const res = request('GET', `query?${queryString.stringify(transformData(data))}`)
  return res
}
