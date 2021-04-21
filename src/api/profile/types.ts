import {
  Brand,
  Model,
  Generation,
  Modification,
} from 'api/cars/types'

export interface PreviousCarSearched {
  brand: Brand
  created: string
  lastSearched: string
  model?: Model
  generation?: Generation
  modification?: Modification
}

export interface DataProfileCar {
  brand: string
  model: string
  generation: number
  engineFuel?: string
  engineVolume?: number
}
