import { request } from '../request'

export interface Car {
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

export const getCarsList = async () => {
  const data = await request('GET', 'get_cars_list/')
  return data
}

export const getCarsModels = async (name: string) => {
  const data = await request('GET', `get_cars_models/${name}/`)
  return data
}

export const getModelGenerations = async (name: string, model: string) => {
  const data = await request('GET', `get_model_generations/${name} ${model}/`)
  return data
}

export const getGenerationModifications = async (name: string, model: string, generation: string) => {
  const data = await request('GET', `get_generation_modifications/${name} ${model}/${generation}/`)
  return data
}
