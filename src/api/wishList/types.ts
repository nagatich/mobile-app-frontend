import { Brand, Model, Generation, Modification } from 'api/cars/types'

// eslint-disable-next-line no-shadow
export enum Priority {
  Low = 0,
  Medium = 1,
  High = 2,
}

export interface WishListItem {
  id: number
  name: string
  minCost: number
  maxCost: number
  avgCost: number
  created: string
  updated: string
  priority: Priority
  brand: Brand
  model?: Model
  generation?: Generation
  modification?: Modification
}

export interface CreateWishListItem {
  id: number
  name: string
  minCost: number
  maxCost: number
  avgCost: number
  created: string
  updated: string
  priority: Priority
  brand: number
  model?: number
  generation?: number
  modification?: number
}
