import { transformFuel } from 'lib/utils'

import {
  Generation,
  Modification,
} from './types'

export const transformGeneration = (data: any): Generation => ({
  id: data.id,
  family: JSON.parse(data.family),
  productionPeriod: JSON.parse(data.production_period),
  name: data.name,
  number: data.number,
})

export const transformModification = (data: any): Modification => ({
  id: data.id,
  fuel: transformFuel(data.fuel),
  generation: data.generation ? transformGeneration(data.generation) : undefined,
  name: data.name,
  powerRange: JSON.parse(data.power_range),
  volume: data.volume,
})
