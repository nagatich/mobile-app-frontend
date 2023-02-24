import { request } from '../request'

import {
  Brand,
  Model,
  Generation,
  Modification,
} from './types'
import { transformGeneration, transformModification } from './transform'

export const getBrands = async (): Promise<Brand[]> => {
  const data = await request('GET', 'get_brand_list/')
  return data
}

export const getModels = async (name: string): Promise<Model[]> => {
  const data = await request('GET', `get_model_list/${name}/`)
  return data
}

export const getGenerations = async (name: string, model: string): Promise<Generation[]> => {
  const data = await request('GET', `get_generation_list/${name}/${model}/`)
  return data.map((item: any) => transformGeneration(item))
}

export const getModifications = async (name: string, model: string, generation: string): Promise<Modification[]> => {
  const data = await request('GET', `get_modification_list/${name}/${model}/${generation}/`)
  return data.map((item: any) => transformModification(item))
}
