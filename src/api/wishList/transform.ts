import { WishListItem } from './types'

export const transformProps = (item: WishListItem) => ({
  id: item.id,
  name: item.name,
  min_cost: item.minCost,
  max_cost: item.maxCost,
  avg_cost: item.avgCost,
  priority: item.priority,
  brand: item.brand,
  model: item.model,
  generation: item.generation,
  modification: item.modification,
})

export const transformItem = (item: any) => ({
  id: item.id,
  name: item.name,
  minCost: item.min_cost,
  maxCost: item.max_cost,
  avgCost: item.avg_cost,
  created: item.created,
  updated: item.updated,
  priority: item.priority,
  brand: item.brand,
  model: item.model,
  generation: item.generation,
  modification: item.modification,
})
