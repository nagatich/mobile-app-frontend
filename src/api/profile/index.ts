import queryString from 'query-string'

import { transformGeneration, transformModification } from 'api/cars'

import { request } from '../request'

import {
  DataProfileCar,
  PreviousCarSearched,
} from './types'

const transformProps = (data: Partial<DataProfileCar>) => ({
  brand: data.brand,
  model: data.model,
  generation: data.generation,
  engine_fuel: data.engineFuel,
  engine_volume: data.engineVolume,
})

const transformData = (data: any) => ({
  brand: data.brand,
  created: data.created,
  lastSearched: data.last_searched,
  model: data.model,
  generation: data.generation ? transformGeneration(data.generation) : null,
  modification: data.modification ? transformModification(data.modification) : null,
})

export const profileCars = async (data: Partial<DataProfileCar>): Promise<PreviousCarSearched[]> => {
  const res = await request('GET', `profile/cars/?${queryString.stringify(transformProps(data))}`)
  return res.map((item: any) => transformData(item))
}
