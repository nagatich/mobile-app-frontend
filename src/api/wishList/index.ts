import { transformModification, transformGeneration } from 'api/cars/transform'

import { request } from '../request'

import { CreateWishListItem, WishListItem } from './types'
import { transformProps, transformItem } from './transform'

export const getWishList = async (): Promise<WishListItem[]> => {
  const data = await request('GET', 'wish_list/')
  const list = data.map((item: any) => ({
    ...transformItem(item),
    generation: item.generation ? transformGeneration(item.generation) : undefined,
    modification: item.modification ? transformModification(item.modification) : undefined,
  }))
  return list
}

export const createWishListItem = async (item: CreateWishListItem): Promise<WishListItem> => {
  const data = await request('POST', 'wish_list/', {
    body: item,
  })
  return ({
    ...transformItem(data),
    generation: data.generation ? transformGeneration(data.generation) : undefined,
    modification: data.modification ? transformModification(data.modification) : undefined,
  })
}

export const getWishListItem = async (id: number): Promise<WishListItem> => {
  const data = await request('GET', `wish_list/${id}/`)
  return ({
    ...transformItem(data),
    generation: data.generation ? transformGeneration(data.generation) : undefined,
    modification: data.modification ? transformModification(data.modification) : undefined,
  })
}

export const updateWishListItem = async (id: number, item: WishListItem): Promise<WishListItem> => {
  const data = await request('PATCH', `wish_list/${id}/`, {
    body: transformProps(item),
  })
  return ({
    ...transformItem(data),
    generation: data.generation ? transformGeneration(data.generation) : undefined,
    modification: data.modification ? transformModification(data.modification) : undefined,
  })
}

export const deleteWishListItem = async (id: number) => {
  const data = await request('PATCH', `wish_list/${id}/`)
  return data
}
