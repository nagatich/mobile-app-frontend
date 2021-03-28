import { observable, action, makeObservable } from 'mobx'

import { query } from 'api/query'

import AppStore from '../AppStore'

import { Result } from './types'

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
    const data = {
      model: this.appStore.filterStore.getCarModelName,
      generation: this.appStore.filterStore.selectedGeneration.number,
      engineFuel: this.appStore.filterStore.selectedGenerationModification.fuel,
      engineVolume: this.appStore.filterStore.selectedGenerationModification.volume,
      query: this.q,
    }
    this.setIsLoading(true)
    this.previousQuery = this.q
    query(data)
      .then((res) => {
        this.result = res
      })
      .catch((err) => {
        console.log({ err })
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }
}

export default QueryStore
