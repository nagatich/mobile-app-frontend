export interface Brand {
  name: string
}

export interface Model {
  name: string
}

export interface Generation {
  family: string[]
  productionPeriod: string[]
  name: string
  number: number
}

export interface Modification {
  fuel: string
  generation: number
  name: string
  powerRange: number[]
  volume: number
}
