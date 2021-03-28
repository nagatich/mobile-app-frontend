import { observable, action, makeObservable } from 'mobx'

import {
  Car,
  Model,
  Generation,
  Modification,
  getCarsList,
  getCarsModels,
  getModelGenerations,
  getGenerationModifications,
} from 'api/cars/'

import AppStore from '../AppStore'

const defaultCar: Car = {
  name: '',
}

const defaultGeneration: Generation = {
  family: [],
  productionPeriod: [],
  name: '',
  number: 0,
}

const defaultModification: Modification = {
  fuel: '',
  generation: 0,
  name: '',
  powerRange: [],
  volume: 0,
}

class FilterStore {
  @observable isLoading = false

  @observable carList: Car[] = []
  @observable selectedCar: Car = defaultCar

  @observable carsModelList: Model[] = []
  @observable selectedModel: Model = defaultCar

  @observable modelGenerationList: Generation[] = []
  @observable selectedGeneration: Generation = defaultGeneration

  @observable generationModificationList: Modification[] = []
  @observable selectedGenerationModification: Modification = defaultModification

  constructor(public appStore: typeof AppStore) {
    makeObservable(this)
  }

  @action setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading
  }

  // single set
  @action selectCar = (name: string) => {
    const car = this.carList.find((item) => item.name === name)
    if (car) {
      this.selectedCar = car
    } else {
      this.selectedCar = defaultCar
    }
  }

  @action selectModel = (name: string) => {
    const model = this.carsModelList.find((item) => item.name === name)
    if (model) {
      this.selectedModel = model
    } else {
      this.selectedModel = defaultCar
    }
  }

  @action selectGeneration = (name: string) => {
    const generation = this.modelGenerationList.find((item) => item.name === name)
    if (generation) {
      this.selectedGeneration = generation
    } else {
      this.selectedGeneration = defaultGeneration
    }
  }

  @action selectModification = (name: string) => {
    const modification = this.generationModificationList.find((item) => item.name === name)
    if (modification) {
      this.selectedGenerationModification = modification
    } else {
      this.selectedGenerationModification = defaultModification
    }
  }

  @action resetSelectedItems = ({ car = false, model = false, generation = false, modification = false }) => {
    if (car) this.selectCar(defaultCar.name)
    if (model) this.selectModel(defaultCar.name)
    if (generation) this.selectGeneration(defaultGeneration.name)
    if (modification) this.selectModification(defaultModification.name)
  }

  // list set
  @action setCarList = (cars: Car[]) => {
    this.carList = cars
  }

  @action setModelList = (models: Model[]) => {
    this.carsModelList = models
  }

  @action setGenerationList = (generations: Generation[]) => {
    this.modelGenerationList = generations
  }

  @action setModificationList = (modifications: Modification[]) => {
    this.generationModificationList = modifications
  }

  @action resetLists = ({ car = false, model = false, generation = false, modification = false }) => {
    if (car) this.setCarList([])
    if (model) this.setModelList([])
    if (generation) this.setGenerationList([])
    if (modification) this.setModificationList([])
  }

  // fetchs
  @action getCarsList = () => {
    this.setIsLoading(true)

    this.resetSelectedItems({ car: true, model: true, generation: true, modification: true })
    this.resetLists({ car: true, model: true, generation: true, modification: true })

    getCarsList()
      .then((res) => {
        this.carList = res.items
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }

  @action getCarsModels = () => {
    this.setIsLoading(true)

    this.resetSelectedItems({ model: true, generation: true, modification: true })
    this.resetLists({ model: true, generation: true, modification: true })

    getCarsModels(this.selectedCar.name)
      .then((res) => {
        this.carsModelList = res.items
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }

  @action getModelGenerations = () => {
    this.setIsLoading(true)

    this.resetSelectedItems({ generation: true, modification: true })
    this.resetLists({ generation: true, modification: true })

    getModelGenerations(this.selectedCar.name, this.selectedModel.name)
      .then((res) => {
        this.modelGenerationList = res.items
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }

  @action getGenerationModifications = () => {
    this.setIsLoading(true)

    this.resetSelectedItems({ modification: true })
    this.resetLists({ modification: true })

    getGenerationModifications(this.selectedCar.name, this.selectedModel.name, this.selectedGeneration.name)
      .then((res) => {
        this.generationModificationList = res.items
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }

  get getCarModelName() {
    return `${this.selectedCar.name} ${this.selectedModel.name}`
  }
}

export default FilterStore
