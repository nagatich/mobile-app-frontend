import { observable, action, makeObservable } from 'mobx'

import {
  getBrands,
  getModels,
  getGenerations,
  getModifications,
} from 'api/cars/'
import {
  Brand,
  Model,
  Generation,
  Modification,
} from 'api/cars/types'
import {
  profileCars,
} from 'api/profile'
import {
  PreviousCarSearched,
  DataProfileCar,
} from 'api/profile/types'

import AppStore from '../AppStore'

const defaultCar: Brand = {
  id: 0,
  name: '',
}

const defaultGeneration: Generation = {
  id: 0,
  family: [],
  productionPeriod: [],
  name: '',
  number: 0,
}

const defaultModification: Modification = {
  id: 0,
  fuel: '',
  generation: defaultGeneration,
  name: '',
  powerRange: [],
  volume: 0,
}

class FilterStore {
  @observable isLoading = false

  @observable brands: Brand[] = []
  @observable selectedBrand: Brand = defaultCar

  @observable models: Model[] = []
  @observable selectedModel: Model = defaultCar

  @observable generations: Generation[] = []
  @observable selectedGeneration: Generation = defaultGeneration

  @observable modifications: Modification[] = []
  @observable selectedModification: Modification = defaultModification

  @observable previousCarSearched?: PreviousCarSearched

  constructor(public appStore: typeof AppStore) {
    makeObservable(this)
  }

  @action setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading
  }

  // single set
  @action selectBrand = (name: string) => {
    const car = this.brands.find((item) => item.name === name)
    if (car) {
      this.selectedBrand = car
    } else {
      this.selectedBrand = defaultCar
    }
    if (this.selectedBrand.name) {
      this.getPreviousCarSearched({
        brand: this.selectedBrand.name,
      })
    }
  }

  @action selectModel = (name: string) => {
    const model = this.models.find((item) => item.name === name)
    if (model) {
      this.selectedModel = model
    } else {
      this.selectedModel = defaultCar
    }
    if (this.selectedModel.name) {
      this.getPreviousCarSearched({
        brand: this.selectedBrand.name,
        model: this.selectedModel.name,
      })
    }
  }

  @action selectGeneration = (name: string) => {
    const generation = this.generations.find((item) => item.name === name)
    if (generation) {
      this.selectedGeneration = generation
    } else {
      this.selectedGeneration = defaultGeneration
    }
    if (this.selectedGeneration.name) {
      this.getPreviousCarSearched({
        brand: this.selectedBrand.name,
        model: this.selectedModel.name,
        generation: this.selectedGeneration.number,
      })
    }
  }

  @action selectModification = (name: string) => {
    const modification = this.modifications.find((item) => item.name === name)
    if (modification) {
      this.selectedModification = modification
    } else {
      this.selectedModification = defaultModification
    }
    if (this.selectedModification.name) {
      this.previousCarSearched = undefined
    }
  }

  @action resetSelectedItems = ({ car = false, model = false, generation = false, modification = false }) => {
    if (car) this.selectBrand(defaultCar.name)
    if (model) this.selectModel(defaultCar.name)
    if (generation) this.selectGeneration(defaultGeneration.name)
    if (modification) this.selectModification(defaultModification.name)
  }

  // list set
  @action setBrandList = (brands: Brand[]) => {
    this.brands = brands
  }

  @action setModelList = (models: Model[]) => {
    this.models = models
  }

  @action setGenerationList = (generations: Generation[]) => {
    this.generations = generations
  }

  @action setModificationList = (modifications: Modification[]) => {
    this.modifications = modifications
  }

  @action resetLists = ({ car = false, model = false, generation = false, modification = false }) => {
    if (car) this.setBrandList([])
    if (model) this.setModelList([])
    if (generation) this.setGenerationList([])
    if (modification) this.setModificationList([])
  }

  // fetchs
  getBrands = async () => {
    this.resetSelectedItems({
      car: true,
      model: true,
      generation: true,
      modification: true,
    })
    this.resetLists({
      car: true,
      model: true,
      generation: true,
      modification: true,
    })

    await getBrands()
      .then((res) => {
        this.setBrandList(res)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }

  getBrandsWithLoading = async () => {
    this.setIsLoading(true)
    await this.getBrands()
    this.setIsLoading(false)
  }

  getModels = async (brandName: string) => {
    this.resetSelectedItems({
      model: true,
      generation: true,
      modification: true,
    })
    this.resetLists({
      model: true,
      generation: true,
      modification: true,
    })
    await getModels(brandName)
      .then((res) => {
        this.setModelList(res)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }

  getModelsWithLoading = async (brandName: string) => {
    this.setIsLoading(true)
    await this.getModels(brandName)
    this.setIsLoading(false)
  }

  getGenerations = async (brandName: string, modelName: string) => {
    this.resetSelectedItems({
      generation: true,
      modification: true,
    })
    this.resetLists({
      generation: true,
      modification: true,
    })

    await getGenerations(brandName, modelName)
      .then((res) => {
        this.setGenerationList(res)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }

  getGenerationsWithLoading = async (brandName: string, modelName: string) => {
    this.setIsLoading(true)
    await this.getGenerations(brandName, modelName)
    this.setIsLoading(false)
  }

  getModifications = async (brandName:string, modelName:string, generationName:string) => {
    this.resetSelectedItems({ modification: true })
    this.resetLists({ modification: true })

    await getModifications(brandName, modelName, generationName)
      .then((res) => {
        this.setModificationList(res)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }

  getModificationsWithLoading = async (brandName: string, modelName: string, generationName:string) => {
    this.setIsLoading(true)
    await this.getModifications(brandName, modelName, generationName)
    this.setIsLoading(false)
  }

  @action getPreviousCarSearched = (data: Partial<DataProfileCar>) => {
    profileCars(data)
      .then((res) => {
        const [previousCarSearched] = res
        this.previousCarSearched = previousCarSearched
      })
  }

  @action fillSelectsByPreviousCar = async (car: PreviousCarSearched) => {
    const {
      brand,
      model,
      generation,
      modification,
    } = car
    this.setIsLoading(true)

    this.selectBrand(brand.name)
    await this.getModels(brand.name)
    if (!model) {
      this.setIsLoading(false)
      return
    }

    this.selectModel(model.name)
    await this.getGenerations(brand.name, model.name)
    if (!generation) {
      this.setIsLoading(false)
      return
    }

    this.selectGeneration(generation.name)
    await this.getModifications(brand.name, model.name, generation.name)
    if (!modification) {
      this.setIsLoading(false)
      return
    }

    this.selectModification(modification.name)
    this.setIsLoading(false)
  }

  // getters
  getBrandById = (id: number) => this.brands.find((brand) => brand.id === id)
  getModelById = (id: number) => this.models.find((model) => model.id === id)
  getGenerationById = (id: number) => this.generations.find((generation) => generation.id === id)
  getModificationById = (id: number) => this.modifications.find((modifications) => modifications.id === id)
}

export default FilterStore
