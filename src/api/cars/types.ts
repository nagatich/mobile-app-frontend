export interface Brand {
  id: number
  name: string
}

export interface Model {
  id: number
  name: string
}

export interface Generation {
  id: number
  family: string[]
  productionPeriod: string[]
  name: string
  number: number
}

export interface Modification {
  id: number
  fuel: string
  name: string
  powerRange: number[]
  volume: number
  generation?: Generation
}
