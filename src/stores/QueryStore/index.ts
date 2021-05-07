import { observable, action, makeObservable } from 'mobx'

import { query } from 'api/query'
import { Result } from 'api/query/types'

import AppStore from '../AppStore'

class QueryStore {
  @observable isLoading = false

  @observable q = ''
  @observable previousQuery = ''

  @observable result: Result | null = null

  constructor(public appStore: typeof AppStore) {
    makeObservable(this)
  }

  @action setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading
  }

  @action setQ = (q: string) => {
    this.q = q
  }

  @action clearQ = () => {
    this.setQ('')
  }

  // fetchs
  @action query = () => {
    const { filterStore } = this.appStore
    const data = {
      brand: filterStore.selectedBrand.name,
      model: filterStore.selectedModel.name,
      generation: filterStore.selectedGeneration.number,
      engineFuel: filterStore.selectedGenerationModification.fuel,
      engineVolume: filterStore.selectedGenerationModification.volume,
      query: this.q,
    }
    this.setIsLoading(true)
    this.previousQuery = this.q
    query(data)
      .then((res) => {
        this.setResult(res)
      })
      .catch((err) => {
        console.log({ err })
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }

  @action setResult = (result: any) => {
    this.result = result
  }

  @action resetResult = () => {
    this.previousQuery = ''
    this.setResult(null)
  }
}

export default QueryStore
