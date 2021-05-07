import queryString from 'query-string'

import { request } from '../request'

import { Result } from './types'

interface Data {
  brand: string
  model: string
  generation: number
  query: string
  engineFuel?: string
  engineVolume?: number
  city?: number
}

const transformData = (data: Data) => ({
  brand: data.brand,
  model: data.model,
  generation: data.generation,
  query: data.query,
  engine_fuel: data.engineFuel,
  engine_volume: data.engineVolume,
  city: data.city,
})

export const query = async (data: Data): Promise<Result> => {
  const res = request('GET', `query?${queryString.stringify(transformData(data))}`)
  return res
}
